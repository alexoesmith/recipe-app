<script setup>
const user = useSupabaseUser();
const { auth } = useSupabaseClient();
watchEffect(() => {
  if (user.value) {
    navigateTo("/recipes");
  }
});
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">Sign in to your account</h2>
    <LoginCard>
      <button
        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="auth.signIn({ provider: 'github' })"
      >
        Sign in
      </button>
    </LoginCard>
  </div>
</template>
