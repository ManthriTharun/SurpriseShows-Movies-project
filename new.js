const urlParams = new URLSearchParams(window.location.search);
const clickedMovie = urlParams.get("clicked");
const type = urlParams.get("type");
console.log(clickedMovie);
console.log(type);
let moviePoster = document.getElementById("movie-poster");
let movieHeading = document.getElementById("movie-h");
let movieRating = document.getElementById("star1");
let movieYear = document.getElementById("year");
let movieDirector = document.getElementById("directed");
let Genre1 = document.getElementById("firstsmall");
let Genre2 = document.getElementById("secondsmall");
let movieDes = document.getElementById("movie-p");
let duration = document.getElementById("duration");
let starLike = document.getElementById("fa-star");
let pinkColor = document.getElementById("pink");

let trendingMovieData;
let topRatedMovieData;
let comingsoonMovieData;
const TrendingMovies = [
  {
    name: "Major",
    rating: 8.1,
    image: "./images/major.jpg",
    director: "Sashi Kiran Tikka",
    year: 2022,
    duration: "2h 29m",
    genre1: "Action",
    genre2: "Biographical",
    description:
      "Based on Major Sandeep Unnikrishnan and his bravery during the 26/11 attacks.",
  },
  {
    name: "Andhra King",
    rating: 8.2,
    image: "./images/andhraKing.jpg",
    director: "P.Mahesh Babu",
    year: 2024,
    duration: "2h 20m",
    genre1: "Drama",
    genre2: "Action",
    description:
      "A mass entertainer showcasing power, leadership, and emotional strength.",
  },
  {
    name: "Baahubali 2",
    rating: 8.2,
    image: "./images/bhahubali2.jpg",
    director: "S. S. Rajamouli",
    year: 2017,
    duration: "2h 47m",
    genre1: "Action",
    genre2: "Drama",
    description: "The epic conclusion revealing the legacy of Baahubali.",
  },
  {
    name: "Jersey",
    rating: 8.5,
    image: "./images/small.jpeg",
    director: "Gowtam Tinnanuri",
    year: 2019,
    duration: "2h 37m",
    genre1: "Drama",
    genre2: "Sports",
    description: "A cricketer's emotional comeback to fulfill his son's dream.",
  },
  {
    name: "Devara",
    rating: 6.8,
    image: "./images/devaraposter1.jpg",
    director: "Koratala Siva",
    year: 2024,
    duration: "2h 45m",
    genre1: "Action",
    genre2: "Drama",
    description:
      "A powerful coastal action drama with intense emotions and conflicts.",
  },
  {
    name: "Kantara",
    rating: 8.4,
    image: "./images/kantara.png",
    director: "Rishab Shetty",
    year: 2022,
    duration: "2h 30m",
    genre1: "Action",
    genre2: "Thriller",
    description:
      "A gripping story blending folklore, belief, and human conflict.",
  },
  {
    name: "Pushpa 2",
    rating: 8.3,
    image: "./images/pushpa2.jpg",
    director: "Sukumar",
    year: 2024,
    duration: "2h 55m",
    genre1: "Action",
    genre2: "Crime",
    description:
      "The rise of Pushpa continues in a world of red sandalwood smuggling.",
  },
  {
    name: "RRR",
    rating: 8.1,
    image: "./images/rrr.jpg",
    director: "S. S. Rajamouli",
    year: 2022,
    duration: "3h 7m",
    genre1: "Action",
    genre2: "Historical",
    description:
      "A fictional tale of two revolutionaries fighting British rule.",
  },
  {
    name: "Sita Ramam",
    rating: 8.0,
    image: "./images/sitaramam.webp",
    director: "Hanu Raghavapudi",
    year: 2022,
    duration: "2h 43m",
    genre1: "Romance",
    genre2: "Drama",
    description: "A beautiful love story told through letters across time.",
  },
  {
    name: "Vikram",
    rating: 8.0,
    image: "./images/vikram.jpg",
    director: "Lokesh Kanagaraj",
    year: 2022,
    duration: "2h 54m",
    genre1: "Action",
    genre2: "Thriller",
    description:
      "A high-octane action thriller involving secret agents and crime syndicates.",
  },
];
const TopRatedMovies = [
  {
    name: "Kantara: Chapter 1",
    rating: 8.5,
    image: "./images/kantara.png",
    director: "Rishab Shetty",
    year: 2025,
    duration: "2h 35m",
    genre1: "Action",
    genre2: "Drama",
    description: "A prequel exploring the origins of divine traditions.",
  },
  {
    name: "L2: Empuraan",
    rating: 8.2,
    image: "./images/epuraan.webp",
    director: "Prithviraj Sukumaran",
    year: 2025,
    duration: "2h 40m",
    genre1: "Action",
    genre2: "Thriller",
    description: "A continuation of Lucifer exploring power and politics.",
  },
  {
    name: "HIT 3",
    rating: 7.9,
    image: "./images/hit3.jpg",
    director: "Sailesh Kolanu",
    year: 2025,
    duration: "2h 20m",
    genre1: "Crime",
    genre2: "Thriller",
    description: "An intense investigation into a complex criminal case.",
  },
  {
    name: "Good Bad Ugly",
    rating: 7.7,
    image: "./images/goodbad.webp",
    director: "Adhik Ravichandran",
    year: 2025,
    duration: "2h 25m",
    genre1: "Action",
    genre2: "Drama",
    description:
      "A story of transformation between good, bad, and grey shades.",
  },
  {
    name: "Sankranthiki Vastunnam",
    rating: 7.6,
    image: "./images/sankranthi.jpg",
    director: "Anil Ravipudi",
    year: 2025,
    duration: "2h 15m",
    genre1: "Comedy",
    genre2: "Drama",
    description: "A festive entertainer filled with humor and family emotions.",
  },
  {
    name: "Court: State vs A Nobody",
    rating: 8.1,
    image: "./images/court.jpg",
    director: "Ram Jagadeesh",
    year: 2025,
    duration: "2h 20m",
    genre1: "Drama",
    genre2: "Legal",
    description: "A courtroom drama highlighting justice and truth.",
  },
  {
    name: "OG",
    rating: 8.5,
    image: "./images/ogg.jpg",
    director: "Sujeeth",
    year: 2025,
    duration: "2h 30m",
    genre1: "Action",
    genre2: "Gangster",
    description: "A gangster returns to reclaim his empire.",
  },
  {
    name: "Kubera",
    rating: 7.9,
    image: "./images/kubera.jpg",
    director: "Sekhar Kammula",
    year: 2025,
    duration: "2h 20m",
    genre1: "Drama",
    genre2: "Social",
    description: "A deep take on wealth and morality.",
  },
  {
    name: "Eleven",
    rating: 7.6,
    image: "./images/eleven.webp",
    director: "Lokkesh Ajls",
    year: 2024,
    duration: "2h 10m",
    genre1: "Thriller",
    genre2: "Mystery",
    description: "A mysterious story filled with suspense.",
  },
  {
    name: "Coolie",
    rating: 8.1,
    image: "./images/coolie.jpg",
    director: "Lokesh Kanagaraj",
    year: 2026,
    duration: "2h 40m",
    genre1: "Action",
    genre2: "Thriller",
    description: "A high-energy action drama.",
  },
];
const Comingsoon = [
  {
    name: "The Raja Saab",
    releaseDate: "2026-01-09",
    likes: "507.2K",
    image: "./images/rajasaab.avif",
    director: "Maruthi",
    year: 2026,
    duration: "TBA",
    genre1: "Horror",
    genre2: "Comedy",
    description: "A horror-comedy entertainer.",
  },
  {
    name: "Jana Nayagan",
    releaseDate: "2026-01-09",
    likes: "271.6K",
    image: "./images/jananayagan.jpg",
    director: "H.Vinoth",
    year: 2026,
    duration: "TBA",
    genre1: "Action",
    genre2: "Drama",
    description: "A powerful story of leadership and rise.",
  },
  {
    name: "Toxic: A Fairy Tale for Grown-Ups",
    releaseDate: "2026-03-19",
    likes: "57K",
    image: "./images/toxic.webp",
    director: "Geetu Mohandas",
    year: 2026,
    duration: "TBA",
    genre1: "Thriller",
    genre2: "Drama",
    description: "A dark emotional narrative.",
  },
  {
    name: "The Paradise",
    releaseDate: "2026-03-26",
    likes: "24.7K",
    image: "./images/paradise.jpg",
    director: "Srikanth Odela",
    year: 2026,
    duration: "TBA",
    genre1: "Action",
    genre2: "Drama",
    description: "A raw and intense action story.",
  },
  {
    name: "Peddi",
    releaseDate: "2026-03-27",
    likes: "21.6K",
    image: "./images/peddi.jpg",
    director: "Buchi Babu Sana",
    year: 2026,
    duration: "TBA",
    genre1: "Drama",
    genre2: "Family",
    description: "A family-oriented emotional drama.",
  },
  {
    name: "G2 (Goodachari 2)",
    releaseDate: "2026-05-01",
    likes: "—",
    image: "./images/g2.jpg",
    director: "Vinay Kumar Sirigineedi",
    year: 2026,
    duration: "TBA",
    genre1: "Action",
    genre2: "Spy",
    description: "A spy thriller continuing the Goodachari story.",
  },
  {
    name: "Jailer 2",
    releaseDate: "2026-06-12",
    likes: "—",
    image: "./images/jailer2.webp",
    director: "Nelson Dilipkumar",
    year: 2026,
    duration: "TBA",
    genre1: "Action",
    genre2: "Crime",
    description: "A sequel with intense action and crime elements.",
  },
  {
    name: "Dragon (NTRNeel)",
    releaseDate: "2026-08-14",
    likes: "—",
    image: "./images/ntrneel.jpg",
    director: "Prashanth Neel",
    year: 2026,
    duration: "TBA",
    genre1: "Action",
    genre2: "Mass",
    description: "A high-voltage mass action entertainer.",
  },
  {
    name: "Fauzi",
    releaseDate: "2026-08-28",
    likes: "—",
    image: "./images/fauzi.jpg",
    director: "Hanum Raghavapudi",
    year: 2026,
    duration: "TBA",
    genre1: "Action",
    genre2: "War",
    description: "A military-based action story.",
  },
  {
    name: "Dacoit",
    releaseDate: "2026-04-10",
    likes: "59k",
    image: "./images/dacoit.jpg",
    director: "Shaneil Deo",
    year: 2026,
    duration: "TBA",
    genre1: "Action",
    genre2: "Thriller",
    description: "A story centered around crime and survival.",
  },
];

if (type === "trending") {
  trendingMovieData = TrendingMovies.find(
    (movie) => movie.name === clickedMovie,
  );
  moviePoster.style.background = `url(${trendingMovieData.image})`;
  moviePoster.style.backgroundSize = "130%";
  moviePoster.style.backgroundPosition = "center";
  Genre1.textContent = trendingMovieData.genre1;
  Genre2.textContent = trendingMovieData.genre2;
  movieHeading.textContent = trendingMovieData.name;
  movieRating.textContent = trendingMovieData.rating;
  movieDirector.textContent = trendingMovieData.director;
  movieYear.textContent = trendingMovieData.year;
  movieDes.textContent = trendingMovieData.description;
  duration.textContent = trendingMovieData.duration;
} else if (type === "toprated") {
  topRatedMovieData = TopRatedMovies.find(
    (movie) => movie.name === clickedMovie,
  );
  moviePoster.style.background = `url(${topRatedMovieData.image})`;
  moviePoster.style.backgroundSize = "130%";
  moviePoster.style.backgroundPosition = "center";
  Genre1.textContent = topRatedMovieData.genre1;
  Genre2.textContent = topRatedMovieData.genre2;
  movieHeading.textContent = topRatedMovieData.name;
  movieRating.textContent = topRatedMovieData.rating;
  movieDirector.textContent = topRatedMovieData.director;
  movieYear.textContent = topRatedMovieData.year;
  movieDes.textContent = topRatedMovieData.description;
  duration.textContent = topRatedMovieData.duration;
} else if (type === "comingsoon") {
  comingsoonMovieData = Comingsoon.find((movie) => movie.name === clickedMovie);
  moviePoster.style.background = `url(${comingsoonMovieData.image})`;
  moviePoster.style.backgroundSize = "130%";
  moviePoster.style.backgroundPosition = "center";

  Genre1.textContent = comingsoonMovieData.genre1;
  Genre2.textContent = comingsoonMovieData.genre2;
  movieHeading.textContent = comingsoonMovieData.name;
  movieRating.textContent = comingsoonMovieData.likes;
  movieDirector.textContent = comingsoonMovieData.director;
  movieYear.textContent = comingsoonMovieData.releaseDate;
  movieDes.textContent = comingsoonMovieData.description;
  duration.textContent = comingsoonMovieData.duration;
  starLike.classList.add("fa-heart");
  starLike.classList.remove("fa-star");
  pinkColor.style.color = "pink";
}
