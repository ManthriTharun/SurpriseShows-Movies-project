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
const rightArrow = document.querySelector(".fa-angle-right");
const leftArrow = document.querySelector(".fa-angle-left");
const posterSection1 = document.querySelector(".poster-section1");
const posterSection2 = document.querySelector(".poster-section2");
const posterSection3 = document.querySelector(".poster-section3");
const TrendingMovies = [
  { name: "Major", rating: 8.1, image: "./images/major.jpg" },
  { name: "Andhra King", rating: 8.2, image: "./images/andhraKing.jpg" },
  { name: "Baahubali 2", rating: 8.2, image: "./images/bhahubali2.jpg" },
  { name: "Jersey", rating: 8.5, image: "./images/small.jpeg" },
  { name: "Devara", rating: 6.8, image: "./images/devaraposter1.jpg" },
  { name: "Kantara", rating: 8.4, image: "./images/kantara.png" },
  { name: "Pushpa 2", rating: 8.3, image: "./images/pushpa2.jpg" },
  { name: "RRR", rating: 8.1, image: "./images/rrr.jpg" },
  { name: "Sita Ramam", rating: 8.0, image: "./images/sitaramam.webp" },
  { name: "Vikram", rating: 8.0, image: "./images/vikram.jpg" },
];
const TopRatedMovies = [
  {
    name: "Kantara: Chapter 1",
    rating: 8.5,
    image: "./images/kantara.png",
  },
  {
    name: "L2: Empuraan",
    rating: 8.2,
    image: "./images/epuraan.webp",
  },
  {
    name: "HIT 3",

    rating: 7.9,
    image: "./images/hit3.jpg",
  },
  {
    name: "Good Bad Ugly",
    rating: 7.7,
    image: "./images/goodbad.webp",
  },
  {
    name: "Sankranthiki Vastunnam",
    rating: 7.6,
    image: "./images/sankranthi.jpg",
  },
  {
    name: "Court: State vs A Nobody",
    rating: 8.1,
    image: "./images/court.jpg",
  },
  {
    name: "OG",
    rating: 8.5,
    image: "./images/ogg.jpg",
  },
  {
    name: "Kubera",
    rating: 7.9,
    image: "./images/kubera.jpg",
  },
  {
    name: "Eleven",
    rating: 7.6,
    image: "./images/eleven.webp",
  },
  {
    name: "Coolie",
    rating: 8.1,
    image: "./images/coolie.jpg",
  },
];
const Comingsoon = [
  {
    name: "The Raja Saab",
    releaseDate: "2026-01-09",
    likes: "507.2K",
    image: "./images/rajasaab.avif",
  },
  {
    name: "Jana Nayagan",
    releaseDate: "2026-01-09",
    likes: "271.6K",
    image: "./images/jananayagan.jpg",
  },
  {
    name: "Toxic: A Fairy Tale for Grown-Ups",
    releaseDate: "2026-03-19",
    likes: "57K",
    image: "./images/toxic.webp",
  },
  {
    name: "The Paradise",
    releaseDate: "2026-03-26",
    likes: "24.7K",
    image: "./images/paradise.jpg",
  },
  {
    name: "Peddi",
    releaseDate: "2026-03-27",
    likes: "21.6K",
    image: "./images/peddi.jpg",
  },
  {
    name: "G2 (Goodachari 2)",
    releaseDate: "2026-05-01",
    likes: "—",
    image: "./images/g2.jpg", // no data yet
  },
  {
    name: "Jailer 2",
    releaseDate: "2026-06-12",
    likes: "—",
    image: "./images/jailer2.webp",
  },
  {
    name: "Dragon (NTRNeel)",
    releaseDate: "2026-08-14",
    likes: "—",
    image: "./images/ntrneel.jpg",
  },
  {
    name: "Fauzi",
    releaseDate: "2026-08-28",
    likes: "—",
    image: "./images/fauzi.jpg",
  },
  {
    name: "Dacoit",
    releaseDate: "2026-04-10",
    likes: "59k",
    image: "./images/dacoit.jpg",
  },
];

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

    // Trigger animations
    applyAnimations();
  }, 300);

  // Set counter to current card and restart auto-sliding after 5 seconds
  counter = cardItem + 1;
  if (intervalID) {
    clearInterval(intervalID);
  }
  intervalID = setInterval(changebg, 7000);
};

/* Function to remove animations */
function removeAnimations() {
  moviedesfull.classList.remove("animate-description");
  movied1.classList.remove("animate-movied-1");
  movieh.classList.remove("animate-movie-h");
  movier.classList.remove("animate-movie-r");
  moviep.classList.remove("animate-movie-p");
  moviebtns.classList.remove("animate-movie-btn");
}

/* Function to apply animations with proper browser sync */
function applyAnimations() {
  // Force reflow to ensure DOM is updated before animation
  removeAnimations();

  // Use requestAnimationFrame for perfect browser sync
  requestAnimationFrame(() => {
    moviedesfull.classList.add("animate-description");
    movied1.classList.add("animate-movied-1");
    movieh.classList.add("animate-movie-h");
    movier.classList.add("animate-movie-r");
    moviep.classList.add("animate-movie-p");
    moviebtns.classList.add("animate-movie-btn");
  });
}

/* Eventlistener for changing the background of nav bar on scroll */

window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".logo-menu-container");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

TrendingMovies.forEach((movie, index) => {
  const moviePoster = `<div class="poster-box">
            <div class="movie-poster mposter${index + 1}">
            <div class="movie-poster-rating">
            <span class="star star-font"><i class="fa-solid fa-star" style="color:rgb(255, 196, 0);"></i> 
            <span class="star1">${movie.rating}</span>
            </span>
            <span><i class="fa-solid fa-plus"></i></span>
            </div>
            <button class="watch-now-btn medium-btn">
                  <i class="fa-solid fa-play"></i>Watch Now
                </button>
                </div>
                <div class="poster-des"><h2>${movie.name}</h2></div>
          </div>`;

  posterSection1.insertAdjacentHTML("beforeend", moviePoster);
  const posterElement = posterSection1.querySelector(`.mposter${index + 1}`);
  if (posterElement) {
    posterElement.style.backgroundImage = `url(${movie.image})`;
  }
});

TopRatedMovies.forEach((movie, index) => {
  const moviePoster1 = `<div class="poster-box">
            <div class="movie-poster mposter${index + 11}">
            <div class="movie-poster-rating">
            <span class="star star-font"><i class="fa-solid fa-star" style="color:rgb(255, 196, 0);"></i> 
            <span class="star1">${movie.rating}</span>
            </span>
            <span><i class="fa-solid fa-plus"></i></span>
            </div>
            <button class="watch-now-btn medium-btn">
                  <i class="fa-solid fa-play"></i>Watch Now
                </button>
                </div>
                <div class="poster-des"><h2>${movie.name}</h2></div>
          </div>`;

  posterSection2.insertAdjacentHTML("beforeend", moviePoster1);
  const posterElement2 = posterSection2.querySelector(`.mposter${index + 11}`);

  if (posterElement2) {
    posterElement2.style.backgroundImage = `url(${movie.image})`;
  }
});

Comingsoon.forEach((movie, index) => {
  const moviePoster2 = `<div class="poster-box">
            <div class="movie-poster mposter${index + 21}">
            <div class="movie-poster-rating">
            <span class="star star-font"><i class="fa-regular fa-heart" style="color:rgb(202, 65, 230);"></i> 
            <span class="star1">${movie.likes}</span>
            </span>
            <span><i class="fa-solid fa-plus"></i></span>
            </div>
            <button class="watch-now-btn medium-btn">
                  <i class="fa-solid fa-play"></i>Watch Now
                </button>
                </div>
                <div class="poster-des"><h2>${movie.name}</h2></div>
          </div>`;

  posterSection3.insertAdjacentHTML("beforeend", moviePoster2);
  const posterElement3 = posterSection3.querySelector(`.mposter${index + 21}`);

  if (posterElement3) {
    posterElement3.style.backgroundImage = `url(${movie.image})`;
  }
});

/* Initialize carousel position tracking for each poster section */
const carouselPositions = new Map();
const SCROLL_AMOUNT = 25; // percentage to scroll

/* Function to initialize carousel tracking */
function initializeCarousels() {
  document
    .querySelectorAll(".movie-posters-container")
    .forEach((container, index) => {
      carouselPositions.set(index, 0);
    });
}

/* Function to handle carousel movement */
function moveCarousel(direction, posterBtn) {
  // Get the closest poster-section to the clicked button
  const posterHolder = posterBtn.closest(".movie-posters-container");
  if (!posterHolder) return;

  const posterSection = posterHolder.querySelector(".poster-section");
  const posterContainer = posterHolder.querySelector(".poster-holder");
  const posters = posterSection.querySelectorAll(".movie-poster");

  // Check if there's content
  if (!posters || posters.length === 0) return;

  // Get the container index for tracking position
  const allContainers = Array.from(
    document.querySelectorAll(".movie-posters-container"),
  );
  const containerIndex = allContainers.indexOf(posterHolder);

  let currentPosition = carouselPositions.get(containerIndex) || 0;

  // Calculate max position based on actual element dimensions
  // This ensures the carousel stops exactly when the last poster is visible
  const maxScrollWidth =
    posterSection.scrollWidth - posterContainer.clientWidth;
  const maxPosition = (maxScrollWidth / posterSection.scrollWidth) * 100;

  // Calculate new position based on direction
  let newPosition = currentPosition;
  if (direction === "right" && currentPosition < maxPosition) {
    newPosition = Math.min(currentPosition + SCROLL_AMOUNT, maxPosition);
  } else if (direction === "left" && currentPosition > 0) {
    newPosition = Math.max(currentPosition - SCROLL_AMOUNT, 0);
  } else {
    // Don't move if at boundary or no content - carousel is idle
    return;
  }

  // Update position and apply smooth transform with transition
  carouselPositions.set(containerIndex, newPosition);
  posterSection.style.transform = `translateX(-${newPosition}%)`;
}

/* Add event listeners to all arrow buttons */
document.querySelectorAll(".poster-btn").forEach((posterBtn) => {
  const rightArrow = posterBtn.querySelector(".fa-angle-right");
  const leftArrow = posterBtn.querySelector(".fa-angle-left");

  if (rightArrow) {
    rightArrow.addEventListener("click", () =>
      moveCarousel("right", posterBtn),
    );
  }

  if (leftArrow) {
    leftArrow.addEventListener("click", () => moveCarousel("left", posterBtn));
  }
});

/* Initialize carousel positions */
initializeCarousels();