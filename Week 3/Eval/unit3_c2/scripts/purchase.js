// console.log("Linked");
let walletbal = JSON.parse(localStorage.getItem("walletbal")) || 0;
let data = JSON.parse(localStorage.getItem("purchase")) || [];

function displayWalletBal(){
    let bal = document.querySelector("#wallet_balance");
    bal.innerText = walletbal;
}

function appendData(data){
    let div = document.querySelector("#purchased_vouchers");
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
        card.append(image, name, price);
        div.append(card);
    })
};

displayWalletBal();
appendData(data);