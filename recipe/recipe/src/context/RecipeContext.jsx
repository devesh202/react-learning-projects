import React, { createContext  ,useEffect,useState } from 'react'

export const recipeContext = createContext(null)


const dummyRecipes = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    chef: "Chef Mario",
    category: "Italian",
    description:
      "A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
    ingredients:
      "Pizza dough, Tomato sauce, Fresh mozzarella, Fresh basil leaves, Olive oil, Salt",
    instructions:
      "1. Preheat oven to 220°C.\n2. Roll out the pizza dough.\n3. Spread tomato sauce evenly.\n4. Add sliced mozzarella.\n5. Bake for 12-15 minutes.\n6. Garnish with fresh basil and drizzle olive oil before serving.",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
  },
  {
    id: "2",
    title: "Veggie Burger",
    chef: "Chef Anna",
    category: "Fast Food",
    description:
      "A healthy and delicious vegetable burger packed with flavors and nutrients.",
    ingredients:
      "Burger buns, Potato patty, Lettuce, Tomato slices, Onion slices, Cheese slice, Mayonnaise, Ketchup",
    instructions:
      "1. Toast the burger buns.\n2. Cook the veggie patty until golden brown.\n3. Spread mayonnaise and ketchup on buns.\n4. Add lettuce, patty, cheese, onion, and tomato.\n5. Cover with top bun and serve hot.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: "3",
    title: "Chocolate Brownies",
    chef: "Chef David",
    category: "Dessert",
    description:
      "Rich and fudgy chocolate brownies with a crackly top and gooey center.",
    ingredients:
      "Dark chocolate, Butter, Sugar, Eggs, All-purpose flour, Cocoa powder, Vanilla extract",
    instructions:
      "1. Preheat oven to 180°C.\n2. Melt chocolate and butter together.\n3. Mix in sugar and eggs.\n4. Fold in flour and cocoa powder.\n5. Pour into baking pan.\n6. Bake for 25-30 minutes.\n7. Let cool before slicing.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    id: "4",
    title: "Chicken Biryani",
    chef: "Chef Ayesha",
    category: "Indian",
    description:
      "Aromatic basmati rice cooked with tender chicken pieces and traditional spices.",
    ingredients:
      "Basmati rice, Chicken, Yogurt, Onion, Garlic, Ginger, Biryani masala, Saffron, Mint leaves, Coriander leaves",
    instructions:
      "1. Marinate chicken with yogurt and spices.\n2. Fry onions until golden.\n3. Cook marinated chicken.\n4. Layer partially cooked rice over chicken.\n5. Add saffron milk and mint leaves.\n6. Cook on low heat for 20 minutes.\n7. Serve hot.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  },
  {
    id: "5",
    title: "Pancakes",
    chef: "Chef Emma",
    category: "Breakfast",
    description:
      "Fluffy and soft pancakes perfect for a delightful breakfast.",
    ingredients:
      "Flour, Milk, Eggs, Baking powder, Sugar, Salt, Butter, Maple syrup",
    instructions:
      "1. Mix dry ingredients in a bowl.\n2. Add milk and eggs, whisk until smooth.\n3. Heat butter in a pan.\n4. Pour batter and cook until bubbles form.\n5. Flip and cook other side.\n6. Serve with maple syrup.",
    image:
      "https://images.unsplash.com/photo-1587731499342-6c0b99caa8b7",
  },
];


const RecipeContext = (props) => {
   const [data, setData] = useState([]);
   useEffect(() => {
  const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
  console.log(storedRecipes)
  const add = [...storedRecipes,...dummyRecipes];
  console.log(add);
  setData(add); 
}, []);
   console.log(data);
  return (
    <recipeContext.Provider value={{data,setData}} >
    {props.children}
    </recipeContext.Provider> 
  )
}

export default RecipeContext