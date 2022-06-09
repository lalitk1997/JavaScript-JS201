let userLS = JSON.parse(localStorage.getItem("user")) || [];

let form = document.querySelector("form").addEventListener("submit", verifyDetails);

function verifyDetails(event){
    event.preventDefault();
    let emailip = document.querySelector("#email").value;
    let passip = document.querySelector("#password").value;
    // console.log(emailip, passip);
    let flag;
    userLS.forEach(element => {
        // console.log(element.email);
        flag = false;
        if(emailip === element.email){
            flag = true;
            if(passip == element.password){
                // return true;
                // console.log("True");
                location.href = "index.html";
            }else{
                alert("Password Incorrect");
            }
        }
    });
    if(flag == false){
        alert("Email is Incorrect");
    }
}
