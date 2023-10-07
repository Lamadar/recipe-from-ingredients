import axios from "axios";

export default class RecipeService {
  static async getIngredients() {
    const response = await axios.get("http://localhost:3000/ingredients/");
    return response;
  }
  static async getRecipes(ingredients) {
    const response = await axios.post("http://localhost:3000/recipes/", {
      ingredients,
    });
    return response;
  }
}
