<template>
  <div
    @click.self="$emit('close')"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex-center z-50"
  >
    <div class="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
      >
        <Icon name="line-md:close-small" />
      </button>
      <h2 class="text-xl font-semibold mb-4">{{ item.name }}</h2>
      <p class="text-sm mb-4">
        Bu, {{ item.name }} için bir modal bileşenidir.
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(["item"]);
defineEmits(["close"]);
</script>
