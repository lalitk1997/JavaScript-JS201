
var userDetails = JSON.parse(localStorage.getItem("userData")) || [];

window.onscroll = function() {myFunction()};

var main_header = document.getElementById("navbar");
var sticky = main_header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_header.classList.add("sticky")
  } else {
    main_header.classList.remove("sticky");
  }
}

function userData(n,c,e,p){
    this.name = n,
    this.contact = c,
    this.email = e,
    this.password = p
}

function addDetails(event){
    event.preventDefault();
    console.log("inside function")

    var form = document.getElementById("signUpDetails");

    var name = form.name.value;
    var contact = form.mobile.value;
    var email = form.email.value;
    var password = form.pass.value;

    var user = new userData(name,contact,email,password);
    userDetails.push(user);

    localStorage.setItem("userData",JSON.stringify(userDetails));
    form.reset();
}