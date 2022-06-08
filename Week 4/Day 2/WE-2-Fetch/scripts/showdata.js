let getData = async(url)=>{
    let res = await fetch(url);
     let data = await res.json()

     return data;
}

let append = (data,container)=>{
       
    data.forEach((ele)=>{
        let div = document.createElement("div")

        let img = document.createElement('img')
        img.src = ele.image;

        let name = document.createElement("h3")
        name = ele.title
        div.append(img,name)
        container.append(div)
    })
}

export {getData,append};