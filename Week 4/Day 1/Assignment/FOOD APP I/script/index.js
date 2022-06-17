

// let searchRes = async () => {
//   let query = document.getElementById("search").value;

//   try {
//     let res = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//     );
//     let data = await res.json();
//     // console.log(data.meals);
//     append(data.meals);
//   } catch (err) {
//     console.log(err);
//   }
// };

// function append(data) {
//   let container = document.getElementById("container");
//   container.innerHTML = null
//   console.log(data);
//   data.forEach((ele) => {

//     let div = document.createElement("div");

//     let img = document.createElement("img");
//     let name = document.createElement("h3");

//     img.src = ele.strMealThumb;
//     name.innerText = ele.strMeal;
//     div.append(img, name);
//     document.getElementById("container").append(div);
//   });

// }
let id;
function debounce(fun, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    fun();
  }, delay);
}

// let debounce = (fun,delay)=>{
//   if(id){
//     clearTimeout(id)
//   }

//   id = setTimeout(()=>{
//     fun()
//   },delay)
// }