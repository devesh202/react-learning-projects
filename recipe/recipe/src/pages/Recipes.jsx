import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";

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
          <Link  to ={`/recipes/details/${recipe.id}`}
            key={recipe.id}
              
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl p-5"
          >
            {/* Image */}
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-full w-full object-cover rounded-xl"
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

  {/* Short Description */}
  <p className="text-gray-700 mb-3">
    {recipe.description?.length > 120
      ? recipe.description.substring(0, 120) + "..."
      : recipe.description}
  </p>

  {/* Category */}
  <p className="mt-auto text-gray-500 text-sm">
    Category:{" "}
    <span className="font-medium text-gray-800">
      {recipe.category}
    </span>
  </p>

  {/* More Link Indicator */}
  <span className="mt-3 text-red-500 font-medium hover:underline">
    ...more
  </span>
</div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
