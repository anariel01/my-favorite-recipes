"use client";

import { useCallback } from "react";
import { useState, useEffect } from "react";

// export const RECIPE_STORAGE_KEY = "recipe";

// export function saveRecipeToLocalStorage(data) {
//   const recipeList = JSON.parse(localStorage.getItem(RECIPE_STORAGE_KEY));

//   if (recipeList) {
//     localStorage.setItem(
//       RECIPE_STORAGE_KEY,
//       JSON.stringify([...recipeList, data])
//     );
//   } else {
//     localStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify([data]));
//   }

//   return null;
// }

// function getRecipeDataFromLocalStorage({ category, recipeId } = {}) {
//   const data = JSON.parse(localStorage.getItem(RECIPE_STORAGE_KEY)) || [];
//   let filtered = {};

//   if (category) {
//     filtered = data.filter((r) => r.category === category);
//   } else if (recipeId) {
//     filtered = data.filter((r) => r.id === recipeId);
//   } else {
//     filtered = data;
//   }

//   return filtered;
// }

// export default function useRecipeData({ category, recipeId } = {}) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(getRecipeDataFromLocalStorage({ category, recipeId }));
//   }, []);

//   const saveRecipe = useCallback((data) => {
//     saveRecipeToLocalStorage(data);
//     setData(setData);
//   }, []);

//   return {
//     saveRecipe,
//     data,
//   };
// }

export const RECIPE_STORAGE_KEY = "recipe";

const read = () => {
  try {
    const raw = localStorage.getItem(RECIPE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const write = (list) => {
  localStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(list));
};

export const getAllRecipes = () => read();

export const getRecipeByCategory = (category) =>
  read().filter((r) => r.category === category) || null;

export const getRecipeById = (id) =>
  read().find((r) => String(r.id) === String(id)) || null;

export const createRecipe = (recipe) => {
  const list = read();
  const withId = { ...recipe, id: recipe.id ?? Date.now() }; // ingredients — УЖЕ строка
  list.push(withId);
  write(list);
  return withId;
};

export const updateRecipeById = (id, patch) => {
  const list = read();
  const i = list.findIndex((r) => String(r.id) === String(id));
  if (i === -1) return null;
  const updated = { ...list[i], ...patch, id: list[i].id }; // не меняем id
  list[i] = updated;
  write(list);
  return updated;
};

export const deleteRecipe = (id) => {
  write(read().filter((r) => String(r.id) !== String(id)));
};
