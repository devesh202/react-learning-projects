import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

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
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
