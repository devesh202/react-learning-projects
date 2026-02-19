import React, { useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { id } = useParams();
  
  const { register, handleSubmit ,reset,formState: { errors },} = useForm();
  const navigate = useNavigate();
  const {data,setData} = useContext(recipeContext)
  const submitHandler = (recipe) => {
    console.log(recipe)
    const index = data.findIndex((recipe)=> id === recipe.id)
    const copyData = [...data];
    copyData[index] ={...copyData[index],...recipe}
    console.log(index);
    setData(copyData)
    toast.success("Recipe updated successfully!");


  }
   const recipe = data.find((item) => item.id === id);

  useEffect(() => {
    if(recipe) reset(recipe)
  },[recipe, reset]
    )


 

 
  

  return recipe ? (
  <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
    <div className="w-full max-w-6xl bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
      
      {/* LEFT SIDE - Preview */}
      <div className="relative h-96 md:h-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-sm opacity-90">By {recipe.chef}</p>
          <span className="mt-3 inline-block bg-white/20 px-4 py-1 rounded-full text-sm backdrop-blur">
            {recipe.category}
          </span>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="p-10 space-y-6 overflow-y-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Edit Recipe
        </h2>

        {/* Image URL */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="url"
            className="mt-1 w-full text-black  border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-red-400 focus:border-none transition"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <small className="text-red-500">{errors.image.message}</small>
          )}
        </div>

        {/* Chef */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Chef Name
          </label>
          <input
            type="text"
            className="mt-1 w-full text-black border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-red-400 transition"
            {...register("chef", { required: "Chef name is required" })}
          />
        </div>

        {/* Title */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Recipe Title
          </label>
          <input
            type="text"
            className="mt-1 w-full text-black border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-red-400 transition"
            {...register("title", { required: "Recipe title is required" })}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            rows="3"
            className="mt-1 w-full text-black border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-red-400 transition"
            {...register("description", { required: true })}
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Ingredients
          </label>
          <textarea
            rows="3"
            className="mt-1 w-full text-black border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-red-400 transition"
            {...register("ingredients", { required: true })}
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Instructions
          </label>
          <textarea
            rows="4"
            className="mt-1 w-full text-black border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-red-400 transition"
            {...register("instructions", { required: true })}
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Category
          </label>
          <select
            className="mt-1 w-full text-black border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-red-400 transition"
            {...register("category", { required: true })}
          >
            <option value="">Select category</option>
            <option value="Italian">Italian</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Dessert">Dessert</option>
            <option value="Indian">Indian</option>
            <option value="Breakfast">Breakfast</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => {
              const filtered = data.filter((item) => item.id !== id);
              setData(filtered);
              navigate("/recipes");
            }}
            className="flex-1 bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  </div>
) : (
  <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
    Loading...
  </div>
);
}
export default SingleRecipe