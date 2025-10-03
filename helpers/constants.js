import breakfasts from "~/images/breakfast.webp";
import lunch from "~/images/lunch.webp";
import soups from "~/images/soups.webp";
import salads from "~/images/salads.webp";
import desserts from "~/images/desserts.webp";
import drinks from "~/images/drinks.webp";
import uncategorized from "~/images/uncategorized.webp";

export const categories = [
  { slug: "uncategorized", title: "Без категории", img: uncategorized },
  { slug: "breakfasts", title: "Завтраки", img: breakfasts },
  { slug: "lunch", title: "Обеды", img: lunch },
  { slug: "soups", title: "Супы", img: soups },
  { slug: "salads", title: "Салаты", img: salads },
  { slug: "desserts", title: "Десерты", img: desserts },
  { slug: "drinks", title: "Напитки", img: drinks },
];
