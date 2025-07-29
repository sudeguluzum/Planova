<template>
  <div
    class="relative border rounded-xl p-6 c-purple hover:-rotate-2 hover:scale-105 hover:bg-gradient-to-r from-[#918EFF] via-[#FF629C] to-[#FDFF45]"
  >
    <h1 class="font-semibold text-xl">{{ title }}</h1>
    <p>{{ note }}</p>
    <Icon name="entypo:pin" class="absolute text-2xl top-1 right-1" />
  </div>
</template>

<script setup>
const props = defineProps({ title: String, note: String });
</script>
