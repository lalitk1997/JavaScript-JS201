// console.log("Linked!")
let productsLS = JSON.parse(localStorage.getItem("products")) || [];
// let 
function displayData(){
    let display = document.querySelector("#displayitems");
    display.innerHTML = null;
    // console.log("Function Called!");
    productsLS.forEach(ele => {
        // console.log(ele.product_name);
        let name = document.createElement("h3");
        name.innerText = ele.product_name;
        let category = document.createElement("h4");
        category.innerText = ele.category;
        let image = document.createElement("img");
        image.src = ele.image_url;
        let price = document.createElement("p");
        price.innerText = ele.price;
        let gender = document.createElement("p");
        gender.innerText = ele.gender;
        let sold = document.createElement("button");
        sold.innerText = ele.sold;
        sold.setAttribute("id", "sold");
        if(sold.innerText == "false"){
            sold.style.backgroundColor = "Red";
        }else{
            sold.style.backgroundColor = "Green";
        }
        sold.addEventListener("click", function(){
            toggle(ele, sold);
        });
        let removebtn = document.createElement("button");
        removebtn.innerText = "Remove Item"
        removebtn.setAttribute("id", "remove");
        removebtn.addEventListener("click", function(){
            removeItem(ele);
        });
        let div = document.createElement("div");
        div.append(name, category, image, price, gender, sold, removebtn);
        display.append(div);
    });
}

function toggle(val, tag){
    // console.log("Toggle");
    // console.log(val.sold);
    // console.log(tag);
    if(val.sold === "true"){
        val.sold = "false";
        tag.innerText = "false";
        tag.style.backgroundColor = "red";
    }else{
        val.sold = "true";
        tag.innerText = "true";
        tag.style.backgroundColor = "green";
    }

}

function removeItem(ele){
    // console.log("removeItem");
    // console.log(ele);
    productsLS = productsLS.filter(function (element){
        if(ele !== element){
            // console.log("Mapped");
            return ele;
        }
    });
    localStorage.setItem("products", JSON.stringify(productsLS));
    displayData();
    displayCount();
}

function displayCount(){
    // console.log("displayCount Called");
    let count = document.querySelector("#counter");
    count.innerText = productsLS.length;
}

displayData();
displayCount();