import { defineStore } from "pinia";

export const useRecipesStore = defineStore({
  id: "recipes",
  state: () => {
    return {
      recipes: [],
    };
  },
  getters: {
    recipeList: (state) => state.recipes,

    recipeBySlug: (state) => (slug) => {
      return state.recipes.find((recipe) => recipe.slug === slug);
    },
  },
});
