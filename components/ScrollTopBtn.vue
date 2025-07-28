<template>
  <div
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 h-12 w-12 cursor-pointer rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300"
  >
    <NuxtImg
      src="anasayfa/index-card/green-ok.png"
      class="w-full rotate-300 transition-transform duration-500 hover:rotate-[-60deg] hover:scale-105"
    />
  </div>
</template>

<script setup>
const isVisible = ref(false);

const toggleVisibility = () => (isVisible.value = window.scrollY > 300);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return;
};

onMounted(() => window.addEventListener("scroll", toggleVisibility));
onBeforeUnmount(() => window.removeEventListener("scroll", toggleVisibility));
</script>
