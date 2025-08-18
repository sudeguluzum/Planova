<template>
  <div
    @click.self="$emit('close')"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex-center z-50"
  >
    <div class="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg relative">
      <button
        @click="$emit('close')"
        class="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
      >
        <Icon name="line-md:close-small" />
      </button>
      <h2 class="text-xl font-semibold mb-4">{{ item.name }}</h2>

      <input
        v-model="title"
        placeholder="Title"
        class="w-full border border-gray-400 rounded-md p-2 mb-4"
        type="text"
      />
      <textarea
        v-model="content"
        placeholder="Write note..."
        rows="4"
        class="w-full border-md p-2 mb-4"
      ></textarea>

      <div class="flex justify-end gap-2">
        <button
          @click="save"
          class="c-purple text-white px-4 py-1 rounded hover:bg-purple-700"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["item"]);
const emit = defineEmits(["close", "save"]);

const title = ref("");
const content = ref("");

function save() {
  if (!title.value || !content.value) return;

  emit("save", {
    title: title.value,
    content: content.value,
  });
  title.value = "";
  content.value = "";
}
</script>
