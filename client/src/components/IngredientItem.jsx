import React from "react";

const IngredientItem = ({ ingredient, selectedIngredients, addOrRemove }) => {
  return (
    <a
      className={`inredient-tag ${selectedIngredients.includes(ingredient) && "selected"}`}
      id={ingredient}
      onClick={() => {
        addOrRemove(ingredient);
      }}
    >
      {ingredient}
    </a>
  );
};

export default IngredientItem;
