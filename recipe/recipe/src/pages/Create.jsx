import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import RecipeContext, { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const { register, handleSubmit ,reset,formState: { errors },} = useForm();
  const navigate = useNavigate();
  const {data,setData} = useContext(recipeContext)
  const submitHandler = (recipe) => {

    recipe.id = nanoid();
    
   
      const stored = JSON.parse(localStorage.getItem("recipes")) || [];
      localStorage.setItem(
        "recipes",
        JSON.stringify([...stored, recipe])
      );

       setData(prev=>[ ...prev,recipe])

  
    toast.success("New recipe added successfully!");

        console.log(recipe);
        navigate('/recipes')

    reset();
      
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Add a New Recipe
        </h2>

        {/* Image URL */}
        <div className="flex flex-col">
          <input
            type="url"
            placeholder="Image URL"
            className="border rounded-md p-3 outline-none text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-400 transition"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <small className="text-red-500 mt-1">{errors.image.message}</small>
          )}
        </div>

        {/* Chef */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Chef name"
            className="border rounded-md p-3 outline-none text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-400 transition"
            {...register("chef", { required: "Chef name is required" })}
          />
          {errors.chef && (
            <small className="text-red-500 mt-1">{errors.chef.message}</small>
          )}
        </div>

        {/* Recipe Title */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Recipe title"
            className="border rounded-md p-3 outline-none text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-400 transition"
            {...register("title", { required: "Recipe title is required" })}
          />
          {errors.title && (
            <small className="text-red-500 mt-1">{errors.title.message}</small>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <textarea
            placeholder="Recipe description"
            className="border rounded-md p-3 outline-none text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-400 transition resize-none h-24"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && (
            <small className="text-red-500 mt-1">{errors.description.message}</small>
          )}
        </div>

        {/* Ingredients */}
        <div className="flex flex-col">
          <textarea
            placeholder="Ingredients (comma separated)"
            className="border rounded-md p-3 outline-none text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-400 transition resize-none h-24"
            {...register("ingredients", { required: "Ingredients are required" })}
          />
          {errors.ingredients && (
            <small className="text-red-500 mt-1">{errors.ingredients.message}</small>
          )}
        </div>

        {/* Instructions */}
        <div className="flex flex-col">
          <textarea
            placeholder="Recipe instructions"
            className="border rounded-md p-3 outline-none text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-400 transition resize-none h-24"
            {...register("instructions", { required: "Instructions are required" })}
          />
          {errors.instructions && (
            <small className="text-red-500 mt-1">{errors.instructions.message}</small>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <select
            className="border rounded-md p-3 outline-none text-gray-900 focus:ring-2 focus:ring-red-400 transition"
            {...register("category", { required: "Select a category" })}
          >
             <option value="">Select category</option>
  <option value="Italian">Italian</option>
  <option value="Fast Food">Fast Food</option>
  <option value="Dessert">Dessert</option>
  <option value="Indian">Indian</option>
  <option value="Breakfast">Breakfast</option>
          </select>
          {errors.category && (
            <small className="text-red-500 mt-1">{errors.category.message}</small>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-3 transition transform hover:scale-105"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
