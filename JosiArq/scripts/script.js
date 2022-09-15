class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();






/* RODANDO AS IMAGENS INICIAIS */
let time = 6000, 
  currentImageIndex = 0, 
  images = document
      .querySelectorAll("#slider img")
  max = images.length;

function nextImagem() {
  images[currentImageIndex].classList.remove("selected")

  currentImageIndex++

  if(currentImageIndex >= max)
    currentImageIndex = 0
  images[currentImageIndex].classList.add("selected")
}

function start() {
  setInterval(() => {
    //lógica de troca de imagem 
    nextImagem()
  }, time)
}

window.addEventListener("load", start)