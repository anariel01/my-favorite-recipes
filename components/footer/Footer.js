import Link from "next/link";
import styles from "./Footer.module.css";
import Navigation from "../navigation/Navigation";

const navItems = [
  { href: "/" },
  { href: "/newrecipe" },
  { href: "/categories" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Navigation navLinks={navItems} />
    </footer>
  );
};

export { Footer };
