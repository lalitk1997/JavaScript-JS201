// console.log("File is linked !");

// PROMISE
// Promise States:
// 1. Pending
// 2. Completed
// 3. Rejected

// Promise() -> Function
// new Promise() -> Constructor Function

// Promise takes function as parameter
// let p = new Promise(function (resolve, rejected){

// });

// PromiseState of p is <pending>
// typeof p -> Object 
// resolve and rejected are mandatory arguments
// console.log(p); 

// WE Assign
// Que. When content load after some time, we will change the image.

let image = document.getElementById("loading_img");

let content_promise = new Promise(function(resolve, rejected){
    // IF CONTENT IS READY RETURN TRUE
    // ELSE RETURN FALSE 
    let content = checkContent();
    // ASYNC PROG -> WILL TAKE 3 SEC TO EXECUTE
    setTimeout(function (){
        if(content === true){
            // PROMISE IS RESOLVED
            resolve("Content is Loaded");
        }else{
            // PROMISE IS REJECTED
            rejected("Content is not available.");
        }
    }, 3000);
});

function checkContent(){
    // RESPONSE FROM SERVER
    return false;
}

// PromiseResult -> Content is Loaded.
console.log(content_promise);

// TO GRAB PROMISE VALUE USE .then AND .catch METHOD.
// .this IS USED TO GET RESOLVED
content_promise.then(function(resolve){
    image.src = "https://media0.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp?cid=ecf05e47du9rfrb5n1wqylpwka83yq4zksqob66dao6h9zsx&rid=200w.webp&ct=g";
});
// .catch IS USED TO GET REJECTED 
content_promise.catch(function(error){
    image.src = "https://media0.giphy.com/media/kEtm4mSTbxvH7j3uCu/200w.webp?cid=ecf05e47zh8k86efe9ahg0hxr3vzcy7e29olzq7bo955n71m&rid=200w.webp&ct=g";
})