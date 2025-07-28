<template>
  <div class="max-w-screen-xl mx-auto c-black">
    <div
      class="bg-circles flex-center flex-col gap-15 md:gap-30 py-20 relative"
    >
      <div
        class="absolute inset-0 bg-gradient-to-tr from-black to-transparent pointer-events-none"
      ></div>
      <div class="relative text-white">
        <h1 class="text-center text-lg md:text-3xl font-bold">
          "Write it down so you don't forget, <br />
          plan it so you don't delay."
        </h1>
        <Icon
          name="line-md:moon-rising-loop"
          class="absolute -top-10 right-2 md:-top-20 md:-right-20 text-3xl md:text-6xl"
        />
        <Icon
          name="pepicons-print:stars"
          class="absolute -bottom-10 left-4 md:-bottom-10 md:-left-20 text-3xl md:text-6xl"
        />
        <Icon
          name="pepicons-print:stars"
          class="absolute md:-bottom-15 md:-left-30 text-md md:text-2xl"
        />
      </div>
      <div class="flex gap-8 z-10">
        <div
          v-for="(i, j) in addButtons"
          :key="j"
          class="flex-center gap-3 group py-2 px-3 rounded-full text-black hover:font-semibold hover:scale-110 shadow-md shadow-gray-500"
          :class="i.color"
          @click="openModal(i)"
        >
          <Icon
            :name="i.icon"
            class="text-2xl transition-transform duration-500 group-hover:rotate-[-360deg]"
          /><button class="hidden md:block">
            {{ i.name }}
          </button>
        </div>
      </div>
      <NoteModal
        v-if="activeModal"
        :item="activeModal"
        @close="activeModal = null"
      />
    </div>
    <div class="c-black px-4 md:px-10">
      <!-- YATAY NOKTALAR: GENİŞLİĞE GÖRE -->
      <div class="bg-white p-4 rounded-4xl" ref="horizontalDotContainer">
        <div class="flex flex-wrap justify-center gap-x-8 overflow-hidden">
          <div
            v-for="n in horizontalDotCount"
            :key="`h-${n}`"
            class="w-5 h-5 c-black rounded-full"
          ></div>
        </div>

        <div
          class="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <Note
            v-for="(i, j) in notes"
            :key="j"
            :title="i.title"
            :note="i.note"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
        <!-- DİKEY NOKTALAR: sol taraf -->
        <div
          class="relative bg-white rounded-xl my-15"
          ref="verticalDotContainer"
        >
          <div
            class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 flex flex-col gap-y-4"
          >
            <div
              v-for="n in verticalDotCount"
              :key="`v-${n}`"
              class="w-5 h-5 c-black rounded-full"
            ></div>
          </div>

          <div class="p-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem hic quisquam unde, non consequuntur corrupti, a
            molestiae possimus voluptates asperiores doloremque debitis ab
            praesentium itaque deleniti cumque, recusandae minima quia.
          </div>
        </div>

        <div
          class="relative bg-white rounded-xl my-15"
          ref="verticalDotContainer"
        >
          <div
            class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-4"
          >
            <div
              v-for="n in verticalDotCount"
              :key="`v-${n}`"
              class="w-5 h-5 c-black rounded-full"
            ></div>
          </div>

          <div class="p-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem hic quisquam unde, non consequuntur corrupti, a
            molestiae possimus voluptates asperiores doloremque debitis ab
            praesentium itaque deleniti cumque, recusandae minima quia.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Icon name="iconoir:star-dashed" />
      <Icon name="iconoir:bright-star" />
      <Icon name="streamline-freehand:link-paperclip" /> -->
</template>
<script setup>
const addButtons = [
  { icon: "fluent:note-add-24-regular", name: "Add Note", color: "c-purple" },
  { icon: "lucide:list-todo", name: "Add ToDo", color: "c-pink" },
  { icon: "octicon:goal-16", name: "Add Goal", color: "c-yellow" },
];
const activeModal = ref(null);
function openModal(item) {
  activeModal.value = item;
}

const notes = [
  { title: "work", note: "loremlfkslfklgdkj fkjfksklfjskf jsfskfjskfklslk" },
  {
    title: "work out",
    note: "loreml fkslfklgd kjfkjfksklfjsk fjsfskfjskfklslk",
  },
  { title: "code", note: "loremlfkslfk lgdkj fkjfksklf jskfjsf skfjskfklslk" },
  {
    title: "work",
    note: "loremlf kslfk lgdkj fkjfkskxvx vbcbcbclfjsk fjsfskfj skfklslk",
  },
  {
    title: "math",
    note: "lore mlfkslfklgdk jfkjfksk lfjsk fjsfs kfjskf klslk",
  },
  {
    title: "study",
    note: "lore mlfkslfklgdk jfkjf ksklfjs kfjsfskfjsk fklslk",
  },
];

const horizontalDotContainer = ref(null);
const verticalDotContainer = ref(null);

const horizontalDotCount = ref(0);
const verticalDotCount = ref(0);

const calculateHorizontalDots = () => {
  const width = horizontalDotContainer.value?.clientWidth || 0;
  const spacing = 53;
  horizontalDotCount.value = Math.floor(width / spacing);
};

const calculateVerticalDots = () => {
  const height = verticalDotContainer.value?.clientHeight || 0;
  const spacing = 40;
  verticalDotCount.value = Math.floor(height / spacing);
};

const handleResize = () => {
  calculateHorizontalDots();
  calculateVerticalDots();
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<style scoped>
.bg-circles {
  background-image: repeating-radial-gradient(
    circle,
    transparent 0px,
    transparent 98px,
    rgba(255, 255, 255, 0.1) 99px,
    rgba(255, 255, 255, 0.1) 100px
  );
}
</style>
