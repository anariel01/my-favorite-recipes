import Link from "next/link";
import styles from "./page.module.css";

export default function NewRecipe() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>
      Новый рецепт
    </h1>
     <form>    
<input placeholder="Название" required></input>
  <select name="category" id="category-select">
    <option value="uncategorized">Без категории</option>
    <option value="breakfasts">Завтраки</option>
    <option value="lunch">Обеды</option>
    <option value="soup">Супы</option>
    <option value="salads">Салаты</option>
    <option value="desserts">Десерты</option>
    <option value="drinks">Напитки</option>

  </select>
   <input placeholder="Время приготовления"></input>
   <input placeholder="Ингридиенты" required></input>
   <input placeholder="Описание"required></input>
   <input type="file" accept="image/png, image/jpeg"></input>
   <button type="submit">Добавить рецепт</button></form>

   
   


    <Link href="/">Home</Link>
    <Link href="/newrecipe">+</Link>
    <Link href="/categories">Categories</Link>
    </div>
    
  );
}