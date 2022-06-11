//sticky navbar starts here

window.onscroll = function () {
    myFunction();
}

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

//sticky navbar end here



let moviesDiv = document.getElementById("searchlist");
let id;

async function searchMovies() {
    let searchList = document.getElementById("searchlist");
    let query = document.getElementById("searchBox").value;
    query = query.split(" ").filter(function (el) {
        if (el != " ") return el;
    }).join(" ");
    if (query.length > 0) {
        searchList.style.visibility = "visible";
    } else {
        searchList.style.visibility = "hidden";
    }
    // console.log('query:', query)

    try {
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=e18b3001`);

        const data = await res.json();
        // console.log('data:', data);
        const movies = data.Search;

        // appendMovies(movies)

        return movies;


    }
    catch (err) {
        console.log('err:', err)

    }

}

function appendMovies(data) {

    if (data == undefined) {
        return false;
    }

    moviesDiv.innerHTML = null;
    data.forEach(function (el) {
        let box = document.createElement("div");
        box.setAttribute("class","searchListItem");
        box.dataset.id = el.imdbID;

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class","searchItemThumbnail");

        let img = document.createElement("img");
        const noPoster = "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";
        img.src = `${el.Poster != "N/A" ? el.Poster: noPoster}`;

        imgDiv.append(img);

        let infoDiv = document.createElement("div");
        infoDiv.setAttribute("class","searchItemInfo");

        let title = document.createElement("h4");
        title.textContent = el.Title;

        let year = document.createElement("p");
        year.textContent = el.Year;
        
        infoDiv.append(title,year);

        box.append(imgDiv,infoDiv);

        moviesDiv.append(box);
    })


}

//closures
async function main(){
    let data = await searchMovies();
    // console.log(data);

    if(data == undefined){
        return false;
    }
    // console.log(data);
    appendMovies(data)
}


// Debouncing 

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        func()
    },delay)
}

window.addEventListener("click",function(event){
    // console.log(event.target.id);
    if(event.target.id != "searchBox"){
        document.getElementById("searchlist").style.visibility = "hidden";
        document.getElementById("searchBox").value = "";
    }
})