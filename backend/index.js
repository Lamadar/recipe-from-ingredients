import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { getRecipes, createRecipe, getAllRecipes, getIngredients } from "./controllers/recipeController.js";
// Define recipe schema

// Create Express application
const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());

// Define API endpoints
app.get("/recipes", getAllRecipes);
app.post("/recipes", getRecipes);
app.post("/recipe", createRecipe);
app.get("/ingredients", getIngredients);

try {
  // Set up database connection
  mongoose.connect("mongodb+srv://test:sYJTaZtxArTcChAh@cluster0.yxb7nv2.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // Start Express server
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
} catch (e) {
  console.log(e);
}
