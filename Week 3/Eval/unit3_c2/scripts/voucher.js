// console.log("linked");

let userLS = JSON.parse(localStorage.getItem("user"));
let purchaseLS = JSON.parse(localStorage.getItem("purchase")) || [];
// console.log(userLS);
// console.log(typeof userLS.amount);
let walletbal = JSON.parse(localStorage.getItem("walletbal")) || 0;
walletbal = userLS.amount
// console.log(typeof walletbal)

displayWalletBal();

function displayWalletBal(){
    let bal = document.querySelector("#wallet_balance");
    bal.innerText = walletbal;
}

// FETCHING DATA FROM API
const API = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
getData();
async function getData(){
    try{
        const res = await fetch(API);
        const data = await res.json();
        // console.log(data[0].vouchers);
        appendData(data[0].vouchers);
    }catch(error){
        console.log(error);
    }
}

function appendData(data){
    let div = document.querySelector("#voucher_list");
    data.forEach(function(ele){
        // console.log(ele);
        let card = document.createElement("div");
        card.setAttribute("class", "voucher");
        // image name price
        let image = document.createElement("img");
        image.src = ele.image;
        let name = document.createElement("p");
        name.innerText = ele.name;
        let price = document.createElement("p");
        price.innerText = ele.price;
        let btn = document.createElement("button");
        btn.setAttribute("class", "buy_voucher");
        btn.innerText = "Buy Voucher";
        btn.addEventListener("click", function(){
            // console.log(ele);
            if(walletbal > ele.price){
                purchaseLS.push(ele);
            }
            updateAmount(ele.price);
            localStorage.setItem("purchase", JSON.stringify(purchaseLS));
        })
        card.append(image, name, price, btn);
        div.append(card);
    })
};

function updateAmount(price){
    console.log(price);
    console.log(walletbal);
    let totalval = 0;
    totalval = totalval + price;
    if(totalval < walletbal){
        walletbal = walletbal - totalval;
        alert("Hurray! purchase successful");
        localStorage.setItem("walletbal", JSON.stringify(walletbal));
        displayWalletBal();
    }else{
        alert("Sorry! insufficient balance");
    }
}