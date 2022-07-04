<script setup>
import { useRecipesStore } from "~/store/recipes";

const recipesStore = useRecipesStore();
</script>

<template>
  <header class="bg-gray-700 p-6">
    <div class="flex justify-between items-center">
      <h1 class="text-white font-bold text-3xl">Recipe App</h1>
      <div>
        <ul class="text-white font-semibold text-xl flex items-center space-x-2">
          <li>
            <nuxt-link
              to="/add-recipe"
              class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add recipe
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              My recipes ({{ recipesStore.recipes.length }})
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
