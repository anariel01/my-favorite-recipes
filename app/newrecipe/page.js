import Link from "next/link";
import styles from "./newrecipe.module.css";
import classNames from "classnames";
import RecipeForm from "@/components/forms/RecipeForm";

export default function NewRecipe() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Новый рецепт</h1>
      <RecipeForm />
    </div>
  );
}
