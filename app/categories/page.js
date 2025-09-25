import Link from "next/link";
import styles from "./categories.module.css";
import classNames from "classnames";
import breakfastimg from "~/images/breakfast.webp";
import lunchimg from "~/images/lunch.webp";
import soupsimg from "~/images/soups.webp";
import saladsimg from "~/images/salads.webp";
import dessertsimg from "~/images/desserts.webp";
import drinksimg from "~/images/drinks.webp";
import uncategorizedimg from "~/images/uncategorized.webp";
import Image from "next/image";

export default function Categories() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Категории</h1>
      <div className={styles.wrapper}>
        <button className={classNames(styles.button, styles.breakfasts)}>
          Завтраки
          <Image
            src={breakfastimg.src}
            width={40}
            height={40}
            alt="breakfasts"
          />
        </button>
        <button className={styles.button}>
          Обеды <Image src={lunchimg.src} width={40} height={40} alt="lunch" />
        </button>
        <button className={styles.button}>
          Супы <Image src={soupsimg.src} width={40} height={40} alt="soups" />
        </button>
        <button className={styles.button}>
          Салаты
          <Image src={saladsimg.src} width={40} height={40} alt="salads" />
        </button>
        <button className={styles.button}>
          Десерты
          <Image src={dessertsimg.src} width={40} height={40} alt="desserts" />
        </button>
        <button className={styles.button}>
          Напитки{" "}
          <Image src={drinksimg.src} width={40} height={40} alt="drinks" />
        </button>
        <button className={styles.button}>
          Без категории{" "}
          <Image
            src={uncategorizedimg.src}
            width={40}
            height={40}
            alt="uncategorized"
          />
        </button>
      </div>
    </div>
  );
}
