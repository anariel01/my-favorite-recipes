import styles from "./page.module.css";
import RecipeList from "@/components/recipelist/RecipeList";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мои рецепты</h1>
      <div className={styles.wrapper}>
        <RecipeList />
      </div>
    </div>
  );
}
