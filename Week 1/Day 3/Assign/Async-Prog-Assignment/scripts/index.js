// console.log("Linked");
// let moviesLS = JSON.parse(localStorage.getItem("movies")) || [];

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
let moviesLS = JSON.parse(localStorage.getItem("movies"));
// console.log(moviesLS);

function displayData(){
    // name, releaseDate, posterUrl, IMDb
    let moviesappend = document.querySelector("#movies");
    moviesappend.innerHTML = null;
    moviesLS.forEach(element => {
        // console.log(element);
        let image = document.createElement("img");
        image.src = element.posterUrl;
        let name = document.createElement("h3");
        name.innerText = element.name;
        let releaseDate = document.createElement("p");
        releaseDate.innerText = element.releaseDate;
        let rating = document.createElement("p");
        rating.innerText = element.IMDb;
        let div = document.createElement("div");
        div.append(image, name, releaseDate, rating); 
        moviesappend.append(div);
    });
};

displayData();
