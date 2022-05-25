// API :- Application Programming Interface

// 3 Stages:
// 1. Fulfilled
// 2. Pending
// 3. Rejected

// CONSISTS -> ARRAY OF OBJECT
// API CALL
const url = "https://reqres.in/api/users"; 

// fetch IS A FUNCTION.
// let x = fetch(url);
// RETURNS promise
// PromiseState fulfilled
// console.log(x);

// typeof x -> Object
// console.log(typeof x);

// fetch(url).then(function (res){
//     // READABLE STREAM
//     // COLLECTS DATA STREAM
//     return res.json();
//     // console.log(res.json());
// })
// .then(function(res){
//     console.log(res.data);
// })
// // CATCH ERRORS
// .catch(function (err){
//     console.log(err);
// });

// SIMPLER METHOD
// Async Await

async function getData(){
    try{
        let res = await fetch(url);
        let users = await res.json();
        // CALLING FUNC TO APPEND TO FRONT-END
        append(users.data);
        console.log(users.data);
    }catch(err){
        console.log(err);
    }
};

getData();

function append(data){
    let container = document.querySelector("#container");
    data.forEach(function (el){
        let img = document.createElement("img");
        img.src = el.avatar;

        let h2 = document.createElement("h2");
        h2.innerText = el.first_name;

        let p = document.createElement("p");
        p.innerText = el.email

        let div = document.createElement("div");
        div.append(img, h2, p);

        container.append(img, h2, p);
    });
};