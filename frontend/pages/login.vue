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
            Login to organize your thoughts.
          </h1>
        </div>
        <div class="bg-circles flex-center flex-col gap-5 py-10">
          <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
            <Input v-model="form.email" placeholder="E-mail" />
            <Input
              v-model="form.password"
              placeholder="Password"
              type="password"
            />

            <button
              class="border rounded-xl px-6 py-3 c-yellow text-black hover:text-white font-semibold hover:bg-gradient-to-r from-[#918EFF] via-[#FF629C] to-[#FDFF45] hover:scale-102"
            >
              Login
            </button>
          </form>
          <NuxtLink
            class="text-xs text-gray-600 hover:text-[#FDFF45] hover:scale-110"
            to="/register"
            >Creat an account</NuxtLink
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
const auth = useAuth();
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

//apiye istek atma

const form = reactive({
  email: "",
  password: "",
});
const handleLogin = async () => {
  const { data, success } = await csrFetch("/api/login", {
    method: "POST",
    body: form,
    credentials: "include", // token cookiede
  });

  if (!success) {
    alert(data?.message || "Giriş Başarısız.");
    return;
  }

  alert("Giriş başarılı! Anasayfaya yönlendiriliyorsunuz..");
  auth.login(data.user);
  router.push("/");
};
</script>
