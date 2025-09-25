"use client";
import { useState, useEffect } from "react";

export default function saveRecipe({ data }) {
  const [recipes, setRecipes] = useState({});

  setRecipes((prev) => ({ ...prev, [data.id]: data }));

  console.log(recipes);
  return null;
}
