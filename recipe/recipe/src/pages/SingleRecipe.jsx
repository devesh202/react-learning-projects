import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { id } = useParams();
  const { data } = useContext(recipeContext);

  const recipe = data.find((item) => item.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Image Section */}
        {recipe.image && (
          <div className="h-80 w-full overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {recipe.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <span>
              👨‍🍳 <strong>Chef:</strong> {recipe.chef}
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              {recipe.category}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Ingredients
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
              {recipe.ingredients?.split(",").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Instructions
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {recipe.instructions}
            </p>
          </div>

          {/* Back Button */}
          <Link
            to="/recipes"
            className="inline-block mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
