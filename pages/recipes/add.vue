<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <main class="py-10">
      <AddRecipeForm />
    </main>
  </div>
</template>
