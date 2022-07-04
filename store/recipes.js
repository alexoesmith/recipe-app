import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useRecipesStore = defineStore("recipes", {
  state: () => {
    return {
      recipes: useStorage("recipes", []),
    };
  },
  getters: {
    recipeList: (state) => state.recipes,

    recipeBySlug: (state) => (slug) => {
      return state.recipes.find((recipe) => recipe.slug === slug);
    },
  },
});
