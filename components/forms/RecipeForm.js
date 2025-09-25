"use client";

import resizeOnType from "@/helpers/resizeOnType";
import styles from "./RecipeForm.module.css";
import classNames from "classnames";
import { useState, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import saveRecipe from "@/helpers/saveRecipe";

export default function RecipeForm() {
  const formMethods = useForm();
  const { reset, handleSubmit, register } = formMethods;
  const textareaRef = useRef(null);
  const { ref: rhfRef, ...descriptionProps } = register("description");

  const onSubmit = (data) => {
    reset();
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
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
          <option value="uncategorized">Без категории</option>
          <option value="breakfasts">Завтраки</option>
          <option value="lunch">Обеды</option>
          <option value="soup">Супы</option>
          <option value="salads">Салаты</option>
          <option value="desserts">Десерты</option>
          <option value="drinks">Напитки</option>
        </select>
        <input
          {...register("time")}
          className={styles.input}
          placeholder="Время приготовления"
        />
        <input
          {...register("ingredients")}
          className={styles.input}
          placeholder="Ингредиенты"
          required
        />
        <textarea
          {...descriptionProps}
          className={classNames(styles.input, styles.textarea)}
          placeholder="Описание рецепта"
          rows={3}
          ref={(el) => {
            rhfRef(el);
            textareaRef.current = el;
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
