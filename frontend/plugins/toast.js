import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
export default defineNuxtPlugin((nuxtApp) => {
    const options = {
        position: 'top-right',
        timeout: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    }

    nuxtApp.vueApp.use(Toast, options)
})