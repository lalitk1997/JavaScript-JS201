
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
  "https://wallpapercave.com/dwp2x/wp1815881.jpg",
  "https://wallpapercave.com/dwp2x/xHc2Ubv.jpg",
  "https://wallpapercave.com/dwp2x/wp1852510.jpg",
  "https://wallpapercave.com/dwp2x/LCGV0lx.jpg",
  "https://wallpapercave.com/dwp2x/QKFSsYu.jpg",
  "https://wallpapercave.com/dwp2x/mMWT92p.jpg",
  "https://wallpapercave.com/dwp2x/8rvy0Ld.jpg",
  "https://wallpapercave.com/dwp2x/OrUm4LJ.jpg",
  "https://wallpapercave.com/dwp2x/wp4142761.jpg",
  "https://wallpapercave.com/dwp2x/YcjhCf6.jpg",
  "https://wallpapercave.com/dwp2x/wp2028630.jpg",
  "https://wallpapercave.com/dwp2x/wp3775630.jpg",
  "https://wallpapercave.com/dwp2x/wp1869905.jpg",
  "https://wallpapercave.com/dwp2x/wp2615541.jpg",
  "https://wallpapercave.com/dwp2x/wp2882108.jpg"
];
localStorage.setItem("movies", JSON.stringify(movieImg));

let movieImages = JSON.parse(localStorage.getItem("movies"));


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