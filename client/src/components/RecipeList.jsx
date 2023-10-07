import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipes">
      {recipes.length > 0 ? (
        <div>
          <h2>You can make {recipes.length} Recipes</h2>
          {recipes.map((recipe) => (
            <div key={recipe._id} className="recipeItem">
              <img src={recipe.imageUrl} style={{ height: "200px", margin: "10px", borderRadius: "20px" }} />
              <div className="content">
                <span style={{ fontSize: "30px" }}>{recipe.name}</span>
                <div>
                  <ul>
                    {recipe.ingredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>
          No recipes found. <br /> Select more ingredients
        </h2>
      )}
    </div>
  );
};

export default RecipeList;
