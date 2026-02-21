"use strict";

/* Accesing Html elements for modifications/ Dom manipulations */
const homebg = document.getElementById("home-bg");
const movieName = document.querySelector(".movie-h");
const movieCard1 = document.querySelector(".mone");
const movieCard2 = document.querySelector(".mtwo");
const movieCard3 = document.querySelector(".mthree");
const movieCard4 = document.querySelector(".mfour");
const bgLayer = document.querySelector(".bg-layer");
const star = document.querySelector(".star1");
const time = document.querySelector(".clockP");
const firstsmall = document.querySelector(".firstsmall");
const secondsmall = document.querySelector(".secondsmall");
const moviedes = document.querySelector(".movie-p");
const year = document.querySelector(".year");
const slide1 = document.querySelector(".slide1");
const slide0 = document.querySelector(".slide0");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const moviedesfull = document.querySelector(".movie-description");
const movied1 = document.querySelector(".movied-1");
const movieh = document.querySelector(".movie-h");
const movier = document.querySelector(".movie-r");
const moviep = document.querySelector(".movie-p");
const moviebtns = document.querySelector(".movie-btn");

const slidingArray = [slide0, slide1, slide2, slide3];
/* CardArray (MovieCards) */
const cardArray = [movieCard2, movieCard1, movieCard3, movieCard4];

/* imagesArray of Objects */
const imagesArray = [
  {
    bg: "./images/jersey11.jpeg",
    name: "Jersey",
    rating: 8.5,
    year: 2019,
    genre1: "Sports",
    genre2: "Emotional",
    duration: "2h 40m",
    description:
      "A talented but failed cricketer in his 30s decides to return to the game to fulfill his son’s dream, proving that passion and determination have no age limit.",
  },
  {
    bg: "./images/baahubaliBG.jpg",
    name: "Baahubali 2",
    rating: 8.2,
    year: 2017,
    genre1: "Epic",
    genre2: "Historical Drama",
    duration: "2h 47m",
    description:
      "Amarendra Baahubali’s legacy unfolds as Mahendra Baahubali rises to reclaim the throne and avenge betrayal in the kingdom of Mahishmati.",
  },

  {
    bg: "./images/majorBG.png",
    name: "Major",
    rating: 8.1,
    year: 2022,
    genre1: "Action",
    genre2: "Biographical",
    duration: "2h 29m",
    description:
      "Based on the life of Major Sandeep Unnikrishnan, the film showcases his courage and sacrifice during the 26/11 Mumbai attacks.",
  },
  {
    bg: "./images/devaraBG.webp",
    name: "Devara",
    rating: 6.8,
    year: 2024,
    genre1: "Action",
    genre2: "Drama",
    duration: "2h 57m",
    description:
      "Set in a coastal region ruled by power and fear, Devara emerges as a fierce protector whose past and destiny shape the fate of his people.",
  },
];

/* TimeInterval for changing background */
let intervalID = setInterval(changebg, 7000);
let counter = 0;
function restart() {
  intervalID = setInterval(changebg, 7000);
}

/* Function to modify background for every 5seconds */
function changebg() {
  slidingArray.forEach((item, index) => {
    item.classList.remove("sliding2");
    if (counter == index) {
      item.classList.add("sliding2");
    }
  });

  bgLayer.style.opacity = 0;

  // Remove animation classes before reapplying
  removeAnimations();

  homebg.style.backgroundImage = `radial-gradient(
      farthest-side at 70% 40%,
      rgb(0, 0, 0),
      rgb(0, 0, 0),
      rgb(0, 0, 0)
    )`;

  setTimeout(() => {
    bgLayer.style.backgroundImage = `
      radial-gradient(
        farthest-side at 70% 40%,
        rgba(255,255,255,0.12),
        rgba(0,0,0,0.62),
        rgb(0,0,0)
      ),
      url(${imagesArray[counter].bg})
    `;

    bgLayer.style.opacity = 1;

    movieName.innerHTML = imagesArray[counter].name;
    star.innerHTML = imagesArray[counter].rating;
    time.innerHTML = imagesArray[counter].duration;
    firstsmall.innerHTML = imagesArray[counter].genre1;
    secondsmall.innerHTML = imagesArray[counter].genre2;
    year.innerHTML = imagesArray[counter].year;
    moviedes.innerHTML = imagesArray[counter].description;

    // Trigger animations
    applyAnimations();

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
  }, 500);
}

/* Adding event listener to movie card items for clicking each card */
movieCard1.addEventListener("click", () => Select(1));
movieCard2.addEventListener("click", () => Select(0));
movieCard3.addEventListener("click", () => Select(2));
movieCard4.addEventListener("click", () => Select(3));
slide1.addEventListener("click", () => Select(1));
slide0.addEventListener("click", () => Select(0));
slide2.addEventListener("click", () => Select(2));
slide3.addEventListener("click", () => Select(3));

/* Function for card items , whenever click the card the below operations will performed */
window.Select = function (cardItem) {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }

  slidingArray.forEach((item, index) => {
    if (cardItem == index) {
      item.classList.add("sliding2");
    } else {
      item.classList.remove("sliding2");
    }
  });

  cardArray.forEach((item) => {
    item.style.border = "none";
    item.style.opacity = 0.5;
  });

  // Remove animation classes before reapplying
  removeAnimations();

  // Fade out background
  bgLayer.style.opacity = 0;

  homebg.style.backgroundImage = `radial-gradient(
      farthest-side at 70% 40%,
      rgb(0, 0, 0),
      rgb(0, 0, 0),
      rgb(0, 0, 0)
    )`;

  setTimeout(() => {
    bgLayer.style.backgroundImage = `
      radial-gradient(
        farthest-side at 70% 40%,
        rgba(255, 255, 255, 0.126),
        rgba(0, 0, 0, 0.625),
        rgb(0, 0, 0)
      ),
      url(${imagesArray[cardItem].bg})
    `;

    bgLayer.style.opacity = 1;

    movieName.innerHTML = `${imagesArray[cardItem].name}`;
    time.textContent = `${imagesArray[cardItem].duration}`;
    year.textContent = `${imagesArray[cardItem].year}`;
    moviedes.textContent = `${imagesArray[cardItem].description}`;
    star.textContent = `${imagesArray[cardItem].rating}`;
    firstsmall.textContent = `${imagesArray[cardItem].genre1}`;
    secondsmall.textContent = `${imagesArray[cardItem].genre2}`;

    const element = cardArray.find((value, index) => {
      return index == cardItem;
    });

    element.style.opacity = 1;
    element.style.border = "3px solid yellow";
  });

  /* Eventlistener for changing the background of nav bar on scroll */

  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".logo-menu-container");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};