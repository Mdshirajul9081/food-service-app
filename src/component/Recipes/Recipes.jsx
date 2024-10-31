import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl"> our recipes</h2>
            <p>Indulge in authentic pasta recipes with fresh ingredients and simple techniques</p>
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;