<script setup>
import { useRecipesStore } from "~/store/recipes";

const recipesStore = useRecipesStore();

const recipes = recipesStore.recipes;
</script>

<template>
  <div class="grid grid-cols-3 gap-x-10 items-start">
    <RecipeCard
      v-for="(recipe, index) in recipes"
      :recipe="recipe"
      :index="index"
      :key="recipe.id"
    />
  </div>
</template>
