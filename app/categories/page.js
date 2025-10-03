import styles from "./categories.module.css";
import Category from "@/components/category/Category";

export default function Categories() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Категории</h1>
      <div className={styles.wrapper}>
        <Category />
      </div>
    </div>
  );
}
