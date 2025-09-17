import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navigation from "@/Components/nav"

export default function Home() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>
      Мои рецепты
    </h1>
    <p className={styles.description}>Здесь пока пусто</p>
     <p className={styles.description}>Нажми + , чтобы добавить свой первый рецепт</p> 
     <Navigation></Navigation>

    </div>
    
  );
}
