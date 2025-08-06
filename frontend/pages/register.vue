<template>
  <div class="min-w-screen min-h-screen max-w-screen max-h-screen flex-center">
    <div class="c-black rounded-2xl flex-center mx-4 p-2 md:p-20 max-w-5xl">
      <div
        ref="verticalDotContainer"
        class="relative rounded-r-2xl m-4 c-purple text-white grid grid-cols-1 md:grid-cols-2"
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

        <div class="p-8 flex-center flex-col gap-5">
          <h1 class="text-3xl font-semibold">
            Register to organize your thoughts.
          </h1>
          <p class="text-sm hidden md:block text-white/60">
            Access your sticky notes and tasks anywhere, anytime
          </p>
        </div>
        <div class="bg-circles flex-center flex-col gap-5 py-10">
          <form
            class="flex flex-col gap-4 px-5"
            @submit.prevent="handleRegister"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input v-model="form.name" placeholder="Name" class="w-full" />
              <Input
                v-model="form.surname"
                placeholder="Surname"
                class="w-full"
              />
            </div>
            <Input v-model="form.email" placeholder="E-mail" />
            <Input
              v-model="form.password"
              placeholder="Password"
              type="password"
            />

            <button
              class="border rounded-xl px-6 py-3 c-yellow text-black hover:text-white font-semibold hover:bg-gradient-to-r from-[#918EFF] via-[#FF629C] to-[#FDFF45] hover:scale-102"
            >
              Register
            </button>
          </form>
          <NuxtLink
            class="text-xs text-gray-600 hover:text-[#FDFF45] hover:scale-110"
            to="/login"
            >Login</NuxtLink
          >
        </div>
        <Icon
          name="streamline-freehand:link-paperclip"
          class="absolute -top-10 -right-1 text-7xl c-yellow"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });
const router = useRouter();
const verticalDotContainer = ref(null);
const verticalDotCount = ref(0);

const calculateVerticalDots = () => {
  const height = verticalDotContainer.value?.clientHeight || 0;
  const spacing = 40;
  verticalDotCount.value = Math.floor(height / spacing);
};
const handleResize = () => {
  calculateVerticalDots();
};
onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

//api ye istek atmak
const form = reactive({
  name: "",
  surname: "",
  email: "",
  password: "",
});

const handleRegister = async () => {
  const { data, success } = await csrFetch("/api/register", {
    method: "POST",
    body: form,
  });

  if (!success) {
    console.error("Backend Hatası:", data);
    alert(data?.message || "Kayıt başarısız.");
    return;
  }

  alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
  router.push("/login");
};
</script>
