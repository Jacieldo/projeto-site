// Importa os módulos dos outros arquivos
import { Player } from './player.js';

// Variáveis globais
const board = ['', '', '', '', '', '', '', '', ''];
const player = 'X';
const computer = 'O';
const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Cria instâncias dos objetos
const player1 = new Player(1);
const player2 = new Player(2);
const scoreboard = new Scoreboard(player1, player2);
const ai = new AI(scoreboard);

// Função para verificar se o tabuleiro está cheio
function isBoardFull(board) {
  return board.every((val) => val !== '');
}

// Função para verificar se há um vencedor
function checkWin(board, player) {
  return winStates.some((state) => {
    return state.every((index) => board[index] === player);
  });
}

// Função para fazer a jogada da IA
function computerPlay(board, computer) {
  // Encontrando as posições vazias do tabuleiro
  let emptyPositions = [];
  board.forEach((val, index) => {
    if (val === '') {
      emptyPositions.push(index);
    }
  });
  // Escolhendo uma posição aleatória
  const randomIndex = Math.floor(Math.random() * emptyPositions.length);
  const computerIndex = emptyPositions[randomIndex];
  // Fazendo a jogada
  board[computerIndex] = computer;
  const square = document.getElementById(computerIndex.toString());
  square.innerText = computer;
  // Verificando se há um vencedor ou se o tabuleiro está cheio
  if (checkWin(board, computer)) {
    alert('A IA ganhou!');
    resetBoard();
  } else if (isBoardFull(board)) {
    alert('Empate!');
    resetBoard();
  }
}

// Função para fazer uma jogada do jogador
function playerPlay(board, player, index) {
  // Fazendo a jogada
  board[index] = player;
  const square = document.getElementById(index.toString());
  square.innerText = player;
  // Verificando se há um vencedor ou se o tabuleiro está cheio
  if (checkWin(board, player)) {
    alert('Parabéns! Você ganhou!');
    resetBoard();
  } else if (isBoardFull(board)) {
    alert('Empate!');
    resetBoard();
  } else {
    // Fazendo a jogada da IA após a jogada do jogador
    computerPlay(board, computer);
  }
}

// Função para reiniciar o tabuleiro
function resetBoard() {
  board.fill('');
  for (let i = 0; i < 9; i++) {
    document.getElementById(i.toString()).innerText = '';
  }
}

// Event listeners para as jogadas do jogador
for (let i = 0; i < 9; i++) {
  document.getElementById(i.toString()).addEventListener('click', function() {
    if (board[i] === '') {
      playerPlay(board, player, i);
    }
  });
}
