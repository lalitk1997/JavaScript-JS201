// console.log("Linked!");

let form = document.querySelector("form").addEventListener("submit", getUser);

let userLS = JSON.parse(localStorage.getItem("user")) || [];

function getUser(event){
    event.preventDefault();
    // console.log("getUser Func Called!");
    let name = document.querySelector("#name").value;
    let contact = document.querySelector("#number").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    // console.log(name, contact, email, password);
    let newUser = new User(name, contact, email, password);
    userLS.push(newUser);
    localStorage.setItem("user", JSON.stringify(userLS));
    displayNull();
}

class User{
    constructor(n, c, e, p){
        this.name = n;
        this.contact = c;
        this.email = e;
        this.password = p
    }
}

function displayNull(){
    document.querySelector("#name").value = null;
    document.querySelector("#number").value = null;
    document.querySelector("#email").value = null;
    document.querySelector("#password").value = null;
}

