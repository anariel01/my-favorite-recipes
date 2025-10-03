"use client";

import resizeOnType from "@/helpers/resizeOnType";
import styles from "./RecipeForm.module.css";
import classNames from "classnames";
import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { createRecipe } from "@/helpers/saveRecipe";
import { categories } from "@/helpers/constants";

export default function RecipeForm() {
  const formMethods = useForm();
  const { reset, handleSubmit, register } = formMethods;
  const textareaDes = useRef(null);
  const textareaIng = useRef(null);
  const { ref: rhfRef, ...descriptionProps } = register("description");
  const { ref: ihfRef, ...ingredientsProps } = register("ingredients");

  // const { saveRecipe } = useRecipeData();

  const onSubmit = (data) => {
    createRecipe({
      ...data,
      id: Date.now(),
    });
    reset();
    if (textareaDes.current) {
      textareaDes.current.style.height = "auto";
    }
    if (textareaIng.current) {
      textareaIng.current.style.height = "auto";
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>
        <input
          {...register("name")}
          className={styles.input}
          placeholder="Название"
          required
        />
        <select
          {...register("category")}
          className={classNames(styles.input, styles.category)}
          id="category-select"
          required
        >
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
        <input
          {...register("time")}
          className={styles.input}
          placeholder="Время приготовления"
        />
        <textarea
          {...ingredientsProps}
          className={classNames(styles.input, styles.textarea)}
          placeholder="после добавления ингредиента нажимайте enter, чтобы добавить следующий"
          rows={3}
          ref={(el) => {
            ihfRef(el);
            textareaIng.current = el;
          }}
          onChange={(e) => {
            resizeOnType(e);
          }}
          required
        />
        <textarea
          {...descriptionProps}
          className={classNames(styles.input, styles.textarea)}
          placeholder="Описание рецепта"
          rows={3}
          ref={(el) => {
            rhfRef(el);
            textareaDes.current = el;
          }}
          onChange={(e) => {
            resizeOnType(e);
          }}
          required
        />
        <div className={styles.input__wrapper}>
          <input
            {...register("photo")}
            type="file"
            id="input__file"
            className={classNames(styles.input, styles.input__file)}
            accept="image/png, image/jpeg"
          />
          <label htmlFor="input__file" className={styles.input__file_button}>
            <span className={styles.input__file_button_text}>
              Добавить фото
            </span>
          </label>
        </div>
        <button className={styles.button} type="submit">
          Добавить рецепт
        </button>
      </FormProvider>
    </form>
  );
}
