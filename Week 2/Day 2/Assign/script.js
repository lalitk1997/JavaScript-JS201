// console.log("Hello!");

let form = document.querySelector("form").addEventListener("submit", searchMovie)

function searchMovie(event){
    event.preventDefault();
    // console.log("Hello");
    let input = document.querySelector("#searchbar");
    // console.log(input.value);
    let titles = input.value; 
    const url = `https://www.omdbapi.com/?s=${titles}&apikey=fd3f38fb`;

    async function getData(){
        try{
            let res = await fetch(url);
            let users = await res.json();
            appendData(users.Search);
            console.log(users.Search);
        }catch(err){
            console.log(err);
        };
    };

    getData();
}

function appendData(data){
    // Title, Year, imdbID, Type, Poster
    let divMain = document.querySelector("#append");
    // console.log("Lalit");
    data.forEach(function(ele){
        let h3 = document.createElement("h3");
        h3.innerText = ele.Title;
        let pYear = document.createElement("p");
        pYear.innerText = ele.Year;
        let pimdb = document.createElement("p");
        pimdb.innerText = ele.imdbID;
        let ptype = document.createElement("p");
        ptype.innerText = ele.Type;
        let img = document.createElement("img");
        img.src = ele.Poster;
        let div = document.createElement("div");
        div.append(img, h3, pYear, pimdb, ptype);
        divMain.append(div); 
    });
};
