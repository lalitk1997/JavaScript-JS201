
window.onscroll = function () { myFunction() };

var main_header = document.getElementById("navbar");
var sticky = main_header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_header.classList.add("sticky")
  } else {
    main_header.classList.remove("sticky");
  }
}

let movieImg = [
  "https://wallpaperaccess.com/full/37946.jpg",
  "https://wallpaperaccess.com/full/54684.jpg",
  "https://wallpaperaccess.com/full/54685.jpg",
  "https://wallpaperaccess.com/full/54686.jpg",
  "https://wallpaperaccess.com/full/54696.jpg",
  "https://wallpaperaccess.com/full/54705.jpg",
  "https://wallpaperaccess.com/full/329593.jpg",
  "https://wallpaperaccess.com/full/329621.jpg",
  "https://wallpaperaccess.com/full/329621.jpg",
  "https://wallpaperaccess.com/full/329658.jpg"
];
localStorage.setItem("moviesPic", JSON.stringify(movieImg));

let movieImages = JSON.parse(localStorage.getItem("moviesPic"));


let i = 0;
let imgDiv = document.getElementById("slideshow");

let img = document.createElement("img");

let id = setInterval(function () {
  if (i == movieImages.length) {
    i = 0;
  }
  imgDiv.innerHTML = null;
  img.src = movieImages[i]
  imgDiv.append(img);
  i++;

}, 2000);



// movie app IV: list of movies

let movieList = [
  {
    name:"RRR",
    releaseDate: "24 March 2022",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGQ3ZjMwZDctZTFkMi00ZjUwLTlmMDUtNDZlYzJjNzZiNTg5XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg",
    IMDb: "9.0"
  },
  {
    name:"Avengers: Endgame",
    releaseDate: "26 April 2019",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    IMDb: "8.4"
  },
  {
    name:"K.G.F: Chapter 1",
    releaseDate: "21 December 2018",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjY1MmM2N2ItYjc1NS00Yjc1LTkxYmQtNGJiMjYwMTlmNDE5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    IMDb: "8.5"
  },
  {
    name:"Uri: The Surgical Strike",
    releaseDate: "11 January 2019",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2U2NjllNDctOWFhMC00NTQ3LTk3YzMtNWNkYjViMmY3MDhhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    IMDb: "8.4"
  },
  {
    name:"Baahubali 2: The Conclusion",
    releaseDate: "28 April 2017",
    posterUrl: "https://media2.bollywoodhungama.in/wp-content/uploads/2017/03/Bahubali-2-The-Conclusion.jpg",
    IMDb: "8.3"
  },
  {
    name:"Dolittle",
    releaseDate: "17 January 2020",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    IMDb: "5.6"
  },
  {
    name:"Batman Begins",
    releaseDate: "17 June 2005",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    IMDb: "8.3"
  },
  {
    name:"Avatar",
    releaseDate: "18 December 2009",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_FMjpg_UX1000_.jpg",
    IMDb: "7.9"
  },
  {
    name:"Thor: Ragnarok",
    releaseDate: "3 November 2017",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    IMDb: "7.9"
  },
];


localStorage.setItem("movies", JSON.stringify(movieList));

let movies = JSON.parse(localStorage.getItem("movies"));

displayData(movies);

function sortLTH(){
  movies.sort((a,b)=>(a.IMDb-b.IMDb));
  displayData(movies);
}
function sortHTL(){
  movies.sort((a,b)=>(b.IMDb-a.IMDb));
  displayData(movies);
}

function displayData(movies){
  document.getElementById("movies").innerHTML = null;
  movies.map(function (el) {

    let box = document.createElement("div");
  
    let img = document.createElement("img");
    img.src = el.posterUrl;
  
    let name = document.createElement("p");
    name.setAttribute("id", "movieName");
    name.textContent = el.name;
    name.style.fontWeight = "bold";
  
    let releaseDate = document.createElement("p");
    releaseDate.textContent = `Released On: ${el.releaseDate}`;
  
    let IMDb = document.createElement("p");
    IMDb.textContent = `IMDb rating: ${el.IMDb}/10`;
  
    box.append(img, name, releaseDate, IMDb);
  
    document.getElementById("movies").append(box)
  })
}
