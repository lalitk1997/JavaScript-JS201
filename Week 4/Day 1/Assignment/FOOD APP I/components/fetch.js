let searchRes = async (query) => {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    let data = await res.json();
    // console.log(data.meals);
    return data.meals;
  } catch (err) {
    console.log(err);
  }
};
let randomMeals = async () => {
  try {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    let data = await res.json();
    // console.log(data.meals);
    return data.meals;
  } catch (err) {
    console.log(err);
  }
};

export { searchRes, randomMeals };
