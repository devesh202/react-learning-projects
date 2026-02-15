import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        No recipes found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        All Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-48 w-full object-cover"
              />
            )}

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Chef:</span> {recipe.chef}
              </p>
              <p className="text-gray-700 mb-3 line-clamp-3">
                {recipe.description}
              </p>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 mb-1">Ingredients:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {recipe.ingredients
                    ? recipe.ingredients.split(",").map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                      ))
                    : "No ingredients listed"}
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 mb-1">Instructions:</p>
                <p className="text-gray-700 text-sm line-clamp-4">
                  {recipe.instructions}
                </p>
              </div>

              <p className="mt-auto text-gray-500 text-sm">
                Category:{" "}
                <span className="font-medium text-gray-800">{recipe.category}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
