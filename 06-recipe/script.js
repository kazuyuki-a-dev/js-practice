let recipes = [
  {
    name: "カレーライス",
    ingredients: ["じゃがいも", "にんじん", "玉ねぎ", "カレールー"],
  },
  {
    name: "味噌汁",
    ingredients: ["味噌", "豆腐", "わかめ"],
  },
];

const recipeList = document.getElementById("recipeList");
const nameInput = document.getElementById("nameInput");
const ingredientsInput = document.getElementById("ingredientsInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  renderRecipes();
});

function renderRecipes() {
  recipeList.innerHTML = "";

  const keyword = searchInput.value;

  const filteredRecipes = recipes.filter(function (recipe) {
    return recipe.ingredients.includes(keyword);
  });

  for (let i = 0; i < filteredRecipes.length; i++) {
    const recipeDiv = document.createElement("div");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.addEventListener("click", function () {
      recipes = recipes.filter(function (r) {
        return r !== filteredRecipes[i];
      });
      renderRecipes();
    });

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = filteredRecipes[i].name;
    recipeDiv.appendChild(nameHeading);

    const ingredientList = document.createElement("ul");

    for (let j = 0; j < filteredRecipes[i].ingredients.length; j++) {
      const li = document.createElement("li");
      li.textContent = filteredRecipes[i].ingredients[j];
      ingredientList.appendChild(li);
    }

    recipeDiv.appendChild(ingredientList);
    recipeDiv.appendChild(deleteBtn);
    recipeList.appendChild(recipeDiv);
  }
}

addBtn.addEventListener("click", function () {
  const newRecipe = {
    name: nameInput.value,
    ingredients: ingredientsInput.value.split(","),
  };

  recipes.push(newRecipe);
  renderRecipes();

  nameInput.value = "";
  ingredientsInput.value = "";
});

renderRecipes();
