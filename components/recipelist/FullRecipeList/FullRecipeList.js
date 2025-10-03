import Svg from "@/components/icons";
import styles from "./FullRecipeList.module.css";
import classNames from "classnames";
import photo from "~/images/4-26-768x576.jpg";
import Image from "next/image";
import { dictionary } from "@/helpers/dictionary";
import Link from "next/link";

export default function FullRecipeList({ recipeItems }) {
  return (
    <>
      <div className={styles.wrapper}>
        {recipeItems.map((recipe) => {
          return (
            <Link
              key={recipe.id}
              href={`/recipe/${recipe.id}`}
              className={styles.link}
            >
              <div key={recipe.id} className={styles.div}>
                <Image src={photo} className={styles.img} alt="photo" />
                <h2 className={styles.title}>{recipe.name}</h2>
                <div className={styles.description}>
                  <p className={classNames(styles.p, styles.category)}>
                    <span>{dictionary.get(recipe.category)}</span>
                  </p>

                  <p className={classNames(styles.p, styles.time)}>
                    <Svg
                      className={styles.svg}
                      icon="Clock"
                      style={{ color: "#868686" }}
                    />
                    <span>{recipe.time}</span>
                  </p>
                  {/* <Link
                    key={recipe.id}
                    href={"/newrecipe"}
                    className={styles.p}
                  >
                    ред.
                  </Link> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
