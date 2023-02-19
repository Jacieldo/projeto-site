// solicita o nome do jogador


function getPlayerName() {
    let name = prompt("Digite o seu nome:");
    while (name == null || name.trim() == "") {
      name = prompt("Digite o seu nome:");
    }
    return name.trim();
  }
  
  let player1 = getPlayerName();
  let player2 = "IA";