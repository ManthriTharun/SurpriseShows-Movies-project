const urlParams = new URLSearchParams(window.location.search);
const clickedMovie = urlParams.get("clicked");
console.log(clickedMovie);

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

const clickedMovieData = TrendingMovies.find(
  (movie) => movie.name === clickedMovie,
);
console.log(clickedMovieData);
