// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "vue3-carousel-nuxt"],
  plugins: ["~/plugins/toast.js"],
  css: ["~/assets/css/tailwind.css"],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: "Planova",
    },
  },
});
