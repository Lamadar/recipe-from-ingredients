import React from "react";
import IngredientItem from "./IngredientItem";

const IngredientList = ({ ingredients, selectedIngredients, addOrRemove }) => {
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.length > 0 ? (
        <div className="ingredients section-block">
          {ingredients.map((ingredient) => (
            <IngredientItem ingredient={ingredient} selectedIngredients={selectedIngredients} addOrRemove={addOrRemove} />
          ))}
        </div>
      ) : (
        <h2>No ingredients found</h2>
      )}
    </div>
  );
};

export default IngredientList;
