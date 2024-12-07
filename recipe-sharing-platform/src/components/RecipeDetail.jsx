import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id === parseInt(id, 10));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-xl font-semibold">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-2xl h-auto object-cover rounded-lg"
        />
      </div>

      {/* Recipe Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ingredients Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Cooking Instructions</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
