import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: [String],
  imageUrl: String,
});

export default mongoose.model("Recipe", recipeSchema);
