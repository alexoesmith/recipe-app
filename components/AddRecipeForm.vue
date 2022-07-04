<script setup>
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";
import { useRecipesStore } from "~/store/recipes";

const recipesStore = useRecipesStore();

const recipe = ref({
  recipe_name: "",
  ingredients: [],
  recipe_steps: "",
});

const errors = ref([]);

const router = useRouter();

const addIngredient = () => {
  recipe.value.ingredients.push("");
};

const removeIngredient = (index) => {
  if (recipe.value.ingredients.length > 1) {
    recipe.value.ingredients.splice(index, 1);
  }
};

const handleFormSubmit = () => {
  errors.value = [];

  if (recipe.value.recipe_name === "") {
    errors.value.push("You must enter a recipe name");
  }

  if (recipe.value.ingredients.length === 0) {
    errors.value.push("You must enter at least one ingredient");
  }

  recipe.value.ingredients.forEach((ingredient, index) => {
    if (ingredient === "") {
      errors.value.push(`Ingredient ${index + 1} cannot be empty`);
    }
  });

  if (recipe.value.recipe_steps === "") {
    errors.value.push("You must enter recipe steps");
  }

  if (!errors.value.length) {
    recipesStore.$patch((state) => {
      state.recipes.push({
        id: uuidv4(),
        slug: slugify(recipe.value.recipe_name),
        ...recipe.value,
      });
    });

    recipe.value = {
      recipe_name: "",
      ingredients: [],
      recipe_steps: "",
    };

    router.push({ path: "/recipes" });
  }
};
</script>

<template>
  <div class="bg-gray-100 p-10 rounded shadow max-w-4xl mx-auto">
    <h2 class="pb-6 font-bold text-4xl">{{ recipe.recipe_name }}</h2>
    <div v-if="errors.length" class="bg-red-200 p-6 rounded-lg shadow mb-10">
      <ul class="text-red-600 font-bold space-y-2">
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </div>
    <form @submit.prevent="handleFormSubmit" class="space-y-4">
      <div>
        <label for="recipe_name" class="block text-sm font-bold text-gray-700">Recipe Name</label>
        <div class="mt-1">
          <input
            type="text"
            name="recipe_name"
            id="recipe_name"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            v-model.trim="recipe.recipe_name"
          />
        </div>
      </div>
      <div v-for="(ingredient, index) in recipe.ingredients" :key="index">
        <div class="flex items-center justify-between space-x-2">
          <label for="ingredient_1" class="block text-sm font-bold text-gray-700"
            >Ingredient {{ index + 1 }}</label
          >
          <p class="text-red-500 text-sm font-bold cursor-pointer" @click="removeIngredient(index)">
            Delete
          </p>
        </div>
        <div class="mt-1">
          <input
            type="text"
            name="ingredient_1"
            id="ingredient_1"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            v-model.trim="recipe.ingredients[index]"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="addIngredient"
        >
          Add ingredient
        </button>
      </div>
      <div>
        <label for="recipe_steps" class="block text-sm font-bold text-gray-700">Recipe steps</label>
        <div class="mt-1">
          <textarea
            rows="4"
            name="recipe_steps"
            id="recipe_steps"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            v-model.trim="recipe.recipe_steps"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add recipe
        </button>
      </div>
    </form>
  </div>
</template>
