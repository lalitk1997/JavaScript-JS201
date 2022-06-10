async function getData(url){
    let res = await fetch(url);
    let data = await res.json();
    return data;
    // appendData(data);
    // console.log(data);
};
// PASSING CONTAINER DYNAMICALLY
function appendData(data, container){
    // let container = document.getElementById("container");
    data.forEach(element => {
        let p = document.createElement("p");
        let img = document.createElement("img");
        let div = document.createElement("div");
        p.innerText = element.title;
        img.src = element.image;
        div.append(img, p);
        container.append(div);
    });
};
export {getData, appendData};