<script setup>
import { useRecipesStore } from "~/store/recipes";

const recipesStore = useRecipesStore();

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const removeRecipe = (index) => {
  recipesStore.$patch((state) => {
    state.recipes.splice(index, 1);
  });
};
</script>

<template>
  <div class="bg-gray-100 rounded-lg shadow p-6 relative group">
    <h3 class="font-bold text-xl pb-2 border-b">{{ props.recipe.recipe_name }}</h3>
    <ul class="pt-4">
      <li v-for="ingredient in props.recipe.ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
    <div class="flex justify-between items-start pt-10">
      <nuxt-link class="text-indigo-600 font-bold" :to="`/recipes/${props.recipe.slug}`"
        >View</nuxt-link
      >
    </div>
    <button
      class="absolute items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white -top-2 -right-2 shadow inline-flex"
      @click="removeRecipe(index)"
    >
      X
    </button>
  </div>
</template>
