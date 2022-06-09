// console.log("Linked");
// Use constructor functions to create object data for the product.
// Once you add the product it should be added to the database in the form of an array of products.

let productsLS = JSON.parse(localStorage.getItem("products")) || [];
let submitbtn = document.querySelector("form").addEventListener("submit", getData);
function getData(event){
    event.preventDefault();
    // console.log("Function Called!");
    let product_name = document.querySelector("#name").value;
    let category = document.querySelector("#category").value;
    let image_url = document.querySelector("#image").value;
    let price = document.querySelector("#price").value;
    let gender = document.querySelector("#gender").value;
    let sold = document.querySelector('input[name="sold"]:checked').value;
    // console.log(product_name, category, image_url, price, gender, sold);
    let newObj = new CreateObj(product_name, category, image_url, price, gender, sold);
    productsLS.push(newObj);
    localStorage.setItem("products", JSON.stringify(productsLS));
    setNull();
}
function CreateObj(p, c, i, pr, g, s){
    this.product_name = p;
    this.category = c;
    this.image_url = i;
    this.price = pr;
    this.gender = g;
    this.sold = s;
}
function setNull(){
    document.querySelector("#name").value = null;
    document.querySelector("#category").value = null;
    document.querySelector("#image").value = null;
    document.querySelector("#price").value = null;
    document.querySelector("#gender").value = null;
    // document.querySelector('input[name="sold"]:checked').value = null;
}
