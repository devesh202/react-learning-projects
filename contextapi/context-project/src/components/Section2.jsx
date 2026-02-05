import React, { useContext, useEffect, useState } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Home from "../pages/Home";

const Section2 = () => {
  const data = useContext(ThemeDataContext);
  const [productData, setproductData] = useState([])
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setproductData(response.data)
  };

  const getFirstData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/"+ {id});
     
  };

  useEffect(function(){
    getData()
  },[])
  console.log(data);
  return (
    
     <div className="flex flex-col w-1/1 text-white">
      <h1>section2</h1>
      <button onClick={getData} className="p-2 bg-amber-400">
        get all products
      </button>
      <button onClick={getFirstData} className="p-2 bg-amber-400">
        get first product
      </button>
      <div className="flex gap-2 h-fit justify-center flex-wrap ">
        {productData.map((item,idx)=>{
            console.log(item.title);
            return (<div className="bg-gray-500 h-50 w-40  p-1 flex flex-col justify-center items-center">
                <img className="h-15 w-15"src={item.image} alt="" />
                <a href='/product' target="_blank" className="text-sm font-bold text-wrap text-blue-600 block" key={idx}>{item.title}</a>
            </div>
            )
        })}
      </div>
    </div>

  );
};

export default Section2;
