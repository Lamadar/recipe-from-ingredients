import Recipe from "../models/Recipe.js";
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Cannot find recipe",
    });
  }
};
export const getRecipes = async (req, res) => {
  // Get list of ingredients from query parameters
  try {
    const ingredients = req.body.ingredients;
    const recipes = await Recipe.find();

    if (ingredients.length == 0) {
      return res.send(recipes);
    }
    // Build search query to find recipes that contain all of the ingredients
    const match = recipes.filter((recipe) => {
      if (recipe.ingredients.every((ingredient) => ingredients.includes(ingredient))) {
        return recipe;
      }
    });
    return res.json(match);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Cannot find recipe",
    });
  }
};
export const createRecipe = async (req, res) => {
  try {
    const doc = new Recipe({
      name: req.body.name,
      ingredients: req.body.ingredients.sort(),
      instructions: req.body.instructions,
      imageUrl: req.body.imageUrl,
    });

    const recipe = await doc.save();
    res.json(recipe);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Recipe cannot be created",
      error: JSON.stringify(e),
    });
  }
};
export const getIngredients = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    const ingredients = [];
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => (!ingredients.includes(ingredient) ? ingredients.push(ingredient) : ""));
    });
    res.json(ingredients);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Cannot find ingredients",
    });
  }
};
