// console.log("Linked");

let btn = document.querySelector("form").addEventListener("submit", createUser);
let userLS = JSON.parse(localStorage.getItem("user")) || {};
function createUser(event){
    event.preventDefault();
    // console.log("Function Calling!");
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let amount = +document.querySelector("#amount").value;
    // console.log(name, typeof name, email, address, amount, typeof amount);
    let user = new User(name, email, address, amount);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    document.querySelector("#name").value = null;
    document.querySelector("#email").value = null;
    document.querySelector("#address").value = null;
    document.querySelector("#amount").value = null;
}

class User{
    constructor(name, email, address, amount){
        this.name = name;
        this.email = email;
        this.address = address;
        this.amount = amount;
    }
}