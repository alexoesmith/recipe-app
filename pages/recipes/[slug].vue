<script setup>
import { useRecipesStore } from "~/store/recipes";

definePageMeta({
  middleware: "auth",
});

const recipesStore = useRecipesStore();

const route = useRoute();
const router = useRouter();

const recipe = recipesStore.recipeBySlug(route.params.slug);

const deleteRecipe = () => {
  recipesStore.$patch((state) => {
    state.recipes.splice(state.recipes.indexOf(recipe), 1);
  });
  router.push("/");
};
</script>

<template>
  <main class="py-10">
    <div class="container mx-auto px-2">
      <div class="flex items-center justify-between border-b">
        <h1 class="text-4xl font-bold pb-6">{{ recipe.recipe_name }}</h1>
        <button @click="deleteRecipe" class="text-sm font-bold text-red-600">Delete recipe</button>
      </div>
      <div class="pt-10">
        <h2 class="font-semibold text-2xl text-gray-700 pb-4">Ingredients</h2>
        <ul class="">
          <li v-for="ingredient in recipe.ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="pt-10">
        <h2 class="font-semibold text-2xl text-gray-700 pb-4">Steps</h2>
        <p>{{ recipe.recipe_steps }}</p>
      </div>
    </div>
  </main>
</template>
