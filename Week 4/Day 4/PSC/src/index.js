import { navbar } from "../components/navbar.js";
// import { getPhoto } from "../src/showdata.js";
import axios from "axios";
let nav = document.querySelector("nav");
nav.innerHTML = navbar();
//   let key = "3H26c7qgwQkEkYPTmhCa4zDxfPKbHBsMsORRS5_zNGA"

document.getElementById("search").addEventListener("click", search);

function search(event) {
  event.preventDefault();
  let name = document.getElementById("photo").value;
  //   let name = "king"
  async function getPhoto(name) {
    let data = await axios.get(
      `https://api.unsplash.com/search/photos?query=${name}&client_id=3H26c7qgwQkEkYPTmhCa4zDxfPKbHBsMsORRS5_zNGA`
    );
    //   console.log(data.data.results)
    append(data.data.results);
  }
  getPhoto(name);
}

function append(data) {
  console.log(data);
  let container = document.querySelector("#container");
  container.innerHTML = "";
  console.log(data);
  data.forEach((element) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = element.urls.regular;
    div.appendChild(img);
    container.append(div);
  });
}
