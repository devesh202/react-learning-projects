import React from "react";
import RecipeCard from "./RecipeCard";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("favourite")) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Favourite Recipes
      </h1>

      {favourite.length > 0 ? (
        <div className="max-w-7xl mx-auto grid gap-8 
                        sm:grid-cols-1 
                        md:grid-cols-2 
                        lg:grid-cols-3">
          {favourite.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <div className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center">
            <p className="text-gray-500 text-xl">
              No favourite recipes yet ❤️
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fav;