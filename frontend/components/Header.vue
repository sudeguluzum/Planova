<template>
  <div
    class="c-black rounded-t-4xl px-10 mt-10 flex items-center justify-between w-full max-w-screen-xl py-6 md:mx-auto text-white"
  >
    <span class="flex-center gap-2 text-2xl font-bold">
      <Icon name="line-md:list-3" class="text-4xl" />
      <h1>Planova</h1></span
    >
    <div class="hidden lg:flex gap-10">
      <button
        v-for="(i, j) in menu"
        class="text-white hover:scale-102 hover:font-semibold hover:bg-gradient-to-r from-[#918EFF] via-[#FF629C] to-[#FDFF45] hover:bg-clip-text hover:text-transparent"
      >
        {{ i.name }}
      </button>
    </div>
    <p>Giriş: {{ auth.isAuthenticated.value }}</p>
    <p>user name: {{ auth.user?.value?.name }}</p>
    <NuxtLink v-if="!auth.isAuthenticated.value" to="/login"
      ><button
        class="border rounded-xl px-6 py-3 c-yellow text-black hover:text-white font-semibold hover:bg-gradient-to-r from-[#918EFF] via-[#FF629C] to-[#FDFF45] hover:scale-102"
      >
        Login
      </button></NuxtLink
    >
    <div class="relative group">
      <div
        v-if="auth.isAuthenticated.value"
        class="relative text-2xl cursor-pointer hover:scale-110"
      >
        <Icon name="line-md:account" class="c-gradient" />
      </div>

      <!-- logout dropdown  -->
      <div
        class="hidden absolute group-hover:block text-nowrap left-1/2 -translate-x-1/2 rounded bg-white/60 backdrop-blur-md shadow-md z-50"
      >
        <p class="text-center">{{ auth.user?.value?.name }}</p>
        <button
          @click="auth.logout"
          class="w-full px-2 py-2 text-sm hover:scale-105 flex items-center gap-2 hover:text-black"
        >
          <Icon name="line-md:log-out" class="text-lg bg-grey-500" />
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const auth = useAuth();
onMounted(async () => {
  await auth.fetchUser();
  console.log("Auth.isAuthenticated:", auth.isAuthenticated.value);
  console.log("Logged in user:", auth.user.value);
});
const menu = [
  { name: "Stick Notes" },
  { name: "To-do List" },
  { name: "Goals" },
];
</script>
