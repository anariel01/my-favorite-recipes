"use client";
import resizeOnType from "@/helpers/resizeOnType";
import classNames from "classnames";
import { categories } from "@/helpers/constants";
import styles from "./editrecipe.module.css";
import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { getRecipeById, updateRecipeById } from "@/helpers/saveRecipe";

export default function EditRecipeForm() {
  const params = useParams();
  const recipeId = params.recipe;
  const router = useRouter();

  const formMethods = useForm();
  const { reset, handleSubmit, register } = formMethods;
  const textareaRef = useRef(null);
  const { ref: rhfRef, ...descriptionProps } = register("description");
  const { ref: ihfRef, ...ingredientsProps } = register("ingredients");

  useEffect(() => {
    const r = getRecipeById(recipeId);
    if (!r) return;
    reset({
      name: r.name || "",
      category: r.category || "",
      time: r.time || "",
      ingredients: r.ingredients || "",
      description: r.description || "",
      photo: undefined,
    });
  }, [recipeId, reset]);

  const onSubmit = async (data) => {
    try {
      updateRecipeById(recipeId, { ...data });
      router.push(`/recipe/${recipeId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h2 className={styles.title}>Редактировать рецепт</h2>
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
              textareaRef.current = el;
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
    </>
  );
}
