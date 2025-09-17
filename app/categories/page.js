// import Button from "@/Components/button"
import Link from "next/link";
import styles from "./page.module.css";

export default function Categories() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>
     Выбери категорию
    </h1>

   <Link href="/">Home</Link>
    <Link href="/newrecipe">+</Link>
    <Link href="/categories">Categories</Link>
    </div>
    
  );
}
