// console.log("Hello");

var formTag = document.querySelector("form").addEventListener("submit", getValue);
var itemsOrderedLS = JSON.parse(localStorage.getItem("itemlist")) || [];

function getValue(event){
    event.preventDefault();
    // console.log("Hello");

    itemsOrderedLS = [];

    let form = document.querySelector("form");
    let check1 = document.querySelector("#item1");
    let check2 = document.querySelector("#item2");
    let check3 = document.querySelector("#item3");
    let check4 = document.querySelector("#item4");
    let check5 = document.querySelector("#item5");

    if(check1.checked){
        itemsOrderedLS.push(form.item1.value);
        // console.log(itemsOrderedLS);
    }
    if(check2.checked){
        itemsOrderedLS.push(form.item2.value);
    }
    if(check3.checked){
        itemsOrderedLS.push(form.item3.value);
    }
    if(check4.checked){
        itemsOrderedLS.push(form.item4.value);
    }
    if(check5.checked){
        itemsOrderedLS.push(form.item5.value);
    }
    // console.log(itemsOrderedLS);
    localStorage.setItem("ordereditems", JSON.stringify(itemsOrderedLS));
    if(itemsOrderedLS.length !== 0){
        enablePromise();
    }
};

function enablePromise(){    
    let deliver_food = new Promise(function(resolve, rejected){
        let food_availablity = checkKitchen();
        let random_time = Math.random()*10000;
        console.log(random_time);
        setTimeout(function(){
            if(food_availablity === true){
                resolve("Food will be ready in some time!");
                // console.log("resolve");
            }else{
                rejected("That particular item is not available!");
                console.log(rejected);
            }
        }, random_time);
    });
    deliver_food.then(function (){
        console.log("Served!");
        printOrderId();
        printFoodImages();
    });
    deliver_food.catch(function(){
        console.log("Will e not able to serve you !");
        image.src = "https://c.tenor.com/GI8sfHyex88AAAAi/red-cross.gif";
    });
}

function checkKitchen(){
    return true;
}

function printFoodImages(){
    let appendDiv = document.querySelector("#append");
    appendDiv.innerHTML = null;
    let imageitem1 = document.createElement("img");
    let imageitem2 = document.createElement("img");
    let imageitem3 = document.createElement("img");
    let imageitem4 = document.createElement("img");
    let imageitem5 = document.createElement("img");
    if(itemsOrderedLS.indexOf("Veg. Burger") !== -1){
        imageitem1.src = "https://5.imimg.com/data5/UY/MK/GC/SELLER-10316784/delicious-veg-burger-250x250.jpg";
        // console.log("Veg. Burger");
    }
    if(itemsOrderedLS.indexOf("Non Veg. Burger") !== -1){
        imageitem2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNNYJYFdo0_r7uxxbXJP0N5EClIuIOs8NDQ&usqp=CAU";
    }
    if(itemsOrderedLS.indexOf("Pizza") !== -1){
        imageitem3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlE7Ngpxl8pAile0uCFiFOT_78Y2A7LXvVlQ&usqp=CAU";
    }
    if(itemsOrderedLS.indexOf("French-Fries") !== -1){
        imageitem4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_ogrCsuoi5ZU4MrEVC_WEiAWC-OKvl6DOw&usqp=CAU";
    }
    if(itemsOrderedLS.indexOf("Cold-drinks") !== -1){
        imageitem5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjMswqsHQ8blhA4wiNAASfAJrAQakRGcz6g&usqp=CAU";
    }
    appendDiv.append(imageitem1, imageitem2, imageitem3, imageitem4, imageitem5)
}

function printOrderId(){
    let orderId = "Order Id :"+parseInt(Math.random()*100);
    console.log(orderId);
    let h3 = document.createElement("h3");
    h3.innerText = orderId;
    let appendOrderId = document.querySelector("#orderId");
    appendOrderId.innerText = null;
    appendOrderId.append(h3);
    // console.log("Hello");
}