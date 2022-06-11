// IMPORTING NAVBAR (navbar.js)
import navbar from "../components/navbar.js";
// IMPORTING CSS (style.css)
import '../styles/styles.css';
// IMPORTING AXIOS
import axios from 'axios';

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

async function getData(){
    let data = await axios.get('https://fakestoreapi.com/products/category/electronics');
    console.log('data:', data.data);
};

getData();