<script setup>
import { useRecipesStore } from "~/store/recipes";

const recipesStore = useRecipesStore();

const recipes = recipesStore.recipes;
</script>

<template>
  <div>
    <main class="py-10">
      <div class="container mx-auto px-2">
        <NoRecipes v-if="!recipes.length" />
        <RecipeGrid v-else />
      </div>
    </main>
  </div>
</template>
