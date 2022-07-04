<template>
  <div class="text-center">
    <h3 class="mt-2 text-4xl font-bold text-gray-900 pb-2">No recipes</h3>
    <p class="mt-1 text-sm text-gray-500">Get started by creating a new recipe.</p>
    <div class="mt-6">
      <nuxt-link
        to="/recipes/add"
        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        New recipe
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/solid";
</script>
