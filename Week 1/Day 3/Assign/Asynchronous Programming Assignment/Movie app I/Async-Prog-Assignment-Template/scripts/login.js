
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

let userDetails = JSON.parse(localStorage.getItem("userData"));
// console.log(userDetails.length)

function loginDetails(event){
    event.preventDefault();

    let form = document.getElementById("loginDetails");

    let currEmail = form.email.value;
    let currPass = form.pass.value;
    let flag = 1;
    for(let i=0; i<userDetails.length; i++){
        if(userDetails[i].email == currEmail && userDetails[i].password == currPass){
            alert("Login successful");
            flag = 1;
            window.location.href = "index.html"
            break;
        }else{
            flag = 0;
        }
    }
    if(flag == 0){
        alert("invalid Credentials")
        form.reset();
    }
}



