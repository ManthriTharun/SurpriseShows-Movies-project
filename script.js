"use strict";

/* Accesing Html elements for modifications/ Dom manipulations */
const homebg = document.getElementById("home-bg");
const movieName = document.querySelector(".movie-h");
const movieCard1 = document.querySelector(".mone");
const movieCard2 = document.querySelector(".mtwo");
const movieCard3 = document.querySelector(".mthree");
const movieCard4 = document.querySelector(".mfour");
const bgLayer = document.querySelector(".bg-layer");



/* CardArray (MovieCards) */
const cardArray = [movieCard2, movieCard1, movieCard3, movieCard4];


/* imagesArray of Objects */
const imagesArray = [
  { bg: "./images/jersey11.jpeg", name: "Jersey" },
  { bg: "./images/baahubaliBG.jpg", name: "Baahubali 2" },

  { bg: "./images/majorBG.png", name: "Major" },
  { bg: "./images/devaraBG.webp", name: "Devara" },
];


/* TimeInterval for changing background */
let intervalID = setInterval(changebg, 5000);
let counter = 0;
function restart(){
  intervalID = setInterval(changebg, 5000);
}



/* Function to modify background for every 5seconds */
function changebg() {
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
        rgba(255,255,255,0.12),
        rgba(0,0,0,0.62),
        rgb(0,0,0)
      ),
      url(${imagesArray[counter].bg})
    `;

    bgLayer.style.opacity = 1;

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
  }, 500);
}


/* Adding event listener to movie card items for clicking each card */
movieCard1.addEventListener("click", () => Select(1));
movieCard2.addEventListener("click", () => Select(0));
movieCard3.addEventListener("click", () => Select(2));
movieCard4.addEventListener("click", () => Select(3));




/* Function for card items , whenever click the card the below operations will performed */
window.Select = function (cardItem) {
 if(intervalID){
  clearInterval(intervalID);
  intervalID=null;
 }
 
  
  cardArray.forEach((item)=>{
    item.style.border="none"
    item.style.opacity=0.5;
  })
  
  bgLayer.style.backgroundImage = ` radial-gradient(
      farthest-side at 70% 40%,
      rgba(255, 255, 255, 0.126),
      rgba(0, 0, 0, 0.625),
      rgb(0, 0, 0)
    ),url(${imagesArray[cardItem].bg})`;
  movieName.textContent = `${imagesArray[cardItem].name}`;
  const element = cardArray.find((value, index) => 
    {
      
      return index == cardItem});
 
  element.style.opacity = 1;
  element.style.border = "3px solid yellow";
 setTimeout(restart,10000);
};



/* Eventlistener for changing the background of nav bar on scroll */

window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".logo-menu-container");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});