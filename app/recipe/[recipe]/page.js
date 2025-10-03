"use client";
import styles from "./recipe.module.css";
import classNames from "classnames";
import photo from "~/images/4-26-768x576.jpg";
import Image from "next/image";
import Link from "next/link";
import Svg from "@/components/icons";
import { useParams } from "next/navigation";
import { deleteRecipe, getRecipeById } from "@/helpers/saveRecipe";
import { dictionary } from "@/helpers/dictionary";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ExampleClientComponent() {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    setRecipe(getRecipeById(params.recipe));
  }, [params.recipe]);

  if (!recipe) {
    return (
      <>
        <h1 className={styles.title}>Подождите, идет загрузка ... </h1>
      </>
    );
  }

  const ingredients = recipe.ingredients
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  function onDelete() {
    if (!confirm("Удалить рецепт?")) return;
    deleteRecipe(params.recipe);
    router.push(`/`);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{recipe.name}</h1>
        <div className={styles.div}>
          <Image src={photo} className={styles.img} alt="photo" />
          <div className={styles.category_time_wrapper}>
            <Link
              href={`/categories/${recipe.category}`}
              className={classNames(styles.p, styles.category)}
            >
              Категория:{" "}
              <span className={styles.span}>
                {dictionary.get(recipe.category)}
              </span>
            </Link>

            <p className={classNames(styles.p, styles.time)}>
              Время приготовления: {recipe.time}
            </p>
          </div>

          <ul className={classNames(styles.p, styles.ingredients)}>
            Ингредиенты:{" "}
            {ingredients.map((ingredient) => {
              return (
                <li key={ingredient} className={styles.li}>
                  {ingredient}
                </li>
              );
            })}
          </ul>
          <p className={classNames(styles.p, styles.description)}>
            {recipe.description}
          </p>
          <div className={styles.edit_delete_wrapper}>
            <Link
              href={`/recipe/${recipe.id}/editrecipeform`}
              className={styles.edit}
            >
              <Svg
                icon="EditPen"
                style={{
                  color: "rgba(93, 107, 96, 0.5)",
                }}
              />
            </Link>
            <button
              onClick={() => {
                onDelete();
              }}
              className={styles.delete}
            >
              <Svg
                icon="TrashCan"
                style={{
                  color: "rgba(93, 107, 96, 0.5)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
