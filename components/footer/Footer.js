import Link from "next/link";
import styles from "./Footer.module.css";
import Navigation from "../navigation/Navigation";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Navigation />
    </footer>
  );
};

export { Footer };
