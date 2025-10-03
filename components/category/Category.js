"use client";

import { categories } from "@/helpers/constants";
import styles from "./Category.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <>
      {categories.map((category) => {
        return (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className={styles.button}
          >
            {category.title}
            <Image
              src={category.img.src}
              width={40}
              height={40}
              alt={category.slug}
            />
          </Link>
        );
      })}
    </>
  );
}
