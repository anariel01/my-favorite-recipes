"use client";
import styles from "./RecipeList.module.css";

import FullRecipeList from "./FullRecipeList/FullRecipeList";
import EmptyRecipeList from "./EmptyRecipeList/EmptyRecipeList";
import { useEffect, useState } from "react";
import { getAllRecipes, RECIPE_STORAGE_KEY } from "@/helpers/saveRecipe";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const load = () => setRecipes(getAllRecipes());

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === RECIPE_STORAGE_KEY) load();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className={styles.wrapper}>
      {recipes && <FullRecipeList recipeItems={recipes} />}
      {recipes.length === 0 && <EmptyRecipeList />}
    </div>
  );
}
