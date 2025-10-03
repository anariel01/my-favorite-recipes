"use client";
import styles from "./Navigation.module.css";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Svg from "../icons";

const navItems = [
  { href: "/", id: "Home" },
  { href: "/newrecipe", id: "NewRecipe" },
  { href: "/categories", id: "Categories" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            className={classNames(styles.link, { [styles.active]: isActive })}
          >
            <Svg
              icon={link.id}
              style={{ color: isActive ? "black" : "rgba(93, 107, 96, 0.8)" }}
            />
          </Link>
        );
      })}
    </>
  );
}
// #96a399
// 9daba0
