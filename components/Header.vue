<script setup>
import { useRecipesStore } from "~/store/recipes";
import { LogoutIcon } from "@heroicons/vue/outline";

const router = useRouter();
const client = useSupabaseClient();
const user = useSupabaseUser();

const recipesStore = useRecipesStore();

const logout = async () => {
  await client.auth.signOut();
  router.push("/");
};
</script>

<template>
  <div>
    <div class="bg-black py-3 px-6" v-if="user">
      <div class="mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-10 h-10 border-2 border-white rounded-full overflow-hidden">
            <img :src="user.user_metadata.avatar_url" alt="" />
          </div>
          <p class="text-white text-sm pl-2 font-semibold">
            {{ user.user_metadata.preferred_username }}
          </p>
        </div>
        <button @click="logout" class="text-white inline-flex space-x-2 items-center">
          <p class="font-semibold text-sm">Logout</p>
          <LogoutIcon class="w-6" />
        </button>
      </div>
    </div>
    <header class="bg-gray-700 p-6 text-white">
      <div class="flex justify-between items-center">
        <h1 class="text-white font-bold text-3xl">Recipe App</h1>
        <div>
          <ul class="text-white font-semibold text-xl flex items-center space-x-2" v-if="user">
            <li>
              <nuxt-link
                to="/recipes/add"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add recipe
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/recipes"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                My recipes ({{ recipesStore.recipes.length }})
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
