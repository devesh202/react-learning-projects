import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    

  return (
    <div><Link  to ={`/recipes/details/${recipe.id}`}
            key={recipe.id}
              
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl p-5"
          >
            {/* Image */}
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-70 w-full overflow-hidden rounded-lg object-cover"
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

          </Link></div>
  )
}

export default RecipeCard