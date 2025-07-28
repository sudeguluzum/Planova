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
    <NuxtLink to="login"
      ><button
        class="border rounded-xl px-6 py-3 c-yellow text-black font-semibold hover:bg-gradient-to-r from-[#918EFF] via-[#FF629C] to-[#FDFF45] hover:scale-102"
      >
        Sign in
      </button></NuxtLink
    >
  </div>
</template>
<script setup>
const menu = [
  { name: "Stick Notes" },
  { name: "To-do List" },
  { name: "Goals" },
];
</script>
