"use client";
import styles from "./category.module.css";
import EmptyRecipeList from "@/components/recipelist/EmptyRecipeList/EmptyRecipeList";
import FullRecipeList from "@/components/recipelist/FullRecipeList/FullRecipeList";
import { dictionary } from "@/helpers/dictionary";
import { useParams } from "next/navigation";
import useRecipeData, {
  getRecipeByCategory,
  RECIPE_STORAGE_KEY,
} from "@/helpers/saveRecipe";
import { useEffect } from "react";
import { useState } from "react";

export default function ExampleClientComponent() {
  const params = useParams();

  const title = dictionary.get(params.category);
  const result = title.charAt(0).toUpperCase() + title.slice(1);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(getRecipeByCategory(params.category));
  }, [params.category]);

  console.log(
    "🚀 ~ ExampleClientComponent ~ params.category:",
    params.category
  );
  console.log("🚀 ~ ExampleClientComponent ~ recipes:", recipes);
  return (
    <>
      <h1 className={styles.h}>{result}</h1>

      {recipes && (
        <div className={styles.wrapper}>
          <FullRecipeList recipeItems={recipes} />
        </div>
      )}
      {recipes.length === 0 && <EmptyRecipeList />}
    </>
  );
}
