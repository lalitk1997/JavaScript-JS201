// const url = 'https://fakestoreapi.com/products/category/electronics'; 

async function getData(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        // CALLING FUNC TO APPEND TO FRONT-END
        // console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
};
// getData(url);

export {getData};