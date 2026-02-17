"use strict";

const homebg = document.getElementById("home-bg");
const movieName = document.querySelector(".movie-h");
const movieCard1 = document.querySelector(".mone");
const movieCard2 = document.querySelector(".mtwo");
const movieCard3 = document.querySelector(".mthree");
const movieCard4 = document.querySelector(".mfour");
const cardArray = [movieCard2, movieCard1, movieCard3, movieCard4];
const imagesArray = [
  { bg: "./images/jersey11.jpeg", name: "Jersey" },
  { bg: "./images/baahubaliBG.jpg", name: "Baahubali 2" },

  { bg: "./images/majorBG.png", name: "Major" },
  { bg: "./images/devaraBG.webp", name: "Devara" },
];
const intervalID = setInterval(changebg, 5000);
let counter = 0;

function changebg() {
  homebg.style.backgroundImage = ` radial-gradient(
      farthest-side at 70% 40%,
      rgba(255, 255, 255, 0.126),
      rgba(0, 0, 0, 0.625),
      rgb(0, 0, 0)
    ),url(${imagesArray[counter].bg})`;
  homebg.style.backgroundSize = "cover";

  movieName.innerHTML = imagesArray[counter].name;
  let card;
  for (let i = 0; i < imagesArray.length; i++) {
    cardArray[i] == 0
      ? (cardArray[i].style.backgroundSize = "130%")
      : cardArray[i] == 1
        ? (cardArray[i].style.backgroundSize = "130%")
        : cardArray[i] == 2
          ? (cardArray[i].style.backgroundSize = "115%")
          : cardArray[i] == 3
            ? (cardArray[i].style.backgroundSize = "115%")
            : null;
    if (counter == i) {
      cardArray[i].style.opacity = 1;
      cardArray[i].style.border = "3px solid yellow";
      cardArray[i] == 0
        ? (cardArray[i].style.backgroundSize = "145%")
        : cardArray[i] == 1
          ? (cardArray[i].style.backgroundSize = "145%")
          : cardArray[i] == 2
            ? (cardArray[i].style.backgroundSize = "130%")
            : cardArray[i] == 3
              ? (cardArray[i].style.backgroundSize = "130%")
              : null;
      cardArray[i].style.transition = "all 0.3s ease";
    } else {
      cardArray[i].style.opacity = 0.5;
      cardArray[i].style.border = "none";
    }
  }

  counter++;
  if (counter >= imagesArray.length) {
    counter = 0;
  }
}

window.Select = function (cardItem) {
  clearInterval(intervalID);

  for (let i = 0; i < imagesArray.length; i++) {
    cardArray[i].style.opacity = 0.5;
    cardArray[i].style.border = "none";
  }

  homebg.style.backgroundImage = ` radial-gradient(
      farthest-side at 70% 40%,
      rgba(255, 255, 255, 0.126),
      rgba(0, 0, 0, 0.625),
      rgb(0, 0, 0)
    ),url(${imagesArray[cardItem].bg})`;
  movieName.textContent = `${imagesArray[cardItem].name}`;
  const element = cardArray.find((value, index) => index == cardItem);

  element.style.opacity = 1;
  element.style.border = "3px solid yellow";
  setTimeout(() => setInterval(changebg, 5000), 6000);
};

window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".logo-menu-container");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});