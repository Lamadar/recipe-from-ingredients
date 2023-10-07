import "./App.css";
import { useState, useEffect } from "react";
import RecipeService from "./API/RecipeService";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const GetRecipes = async (ingredients) => {
    const response = await RecipeService.getRecipes(ingredients);
    setRecipes(response.data);
  };
  const GetIngredients = async () => {
    const response = await RecipeService.getIngredients();
    setIngredients(response.data);
  };
  const addOrRemove = (name) => {
    const newIngredients = [...selectedIngredients];
    const index = newIngredients.indexOf(name);
    if (index === -1) {
      newIngredients.push(name);
    } else {
      newIngredients.splice(index, 1);
    }
    setSelectedIngredients(newIngredients);
  };
  useEffect(() => {
    GetIngredients();
  });
  useEffect(() => {
    GetRecipes(selectedIngredients);
  }, [selectedIngredients]);

  return (
    <div className="App">
      <div>
        <h1>Choose what to cook</h1>

        <div className="box">
          <div className="sidebar">
            <IngredientList ingredients={ingredients} selectedIngredients={selectedIngredients} addOrRemove={addOrRemove} />
          </div>
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </div>
  );
}

export default App;
