<template>
  <div class="relative w-full">
  <input v-model="model" :type="setType" :placeholder="placeholder" class="w-full border border-black rounded-xl p-4 pr-9 bg-white text-black"></input>

<Icon v-if="type=== 'password'"
@click="showPassword = !showPassword"
 :name="showPassword?'line-md:watch-off-loop':'line-md:watch-loop'"class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl " />
</div>
</template>

<script setup>
const model=defineModel()
const props=defineProps({
  type:{type:String, default:"text"},
  placeholder:{type:String}
})

const showPassword=ref(false)
const setType=computed(()=>{
  return props.type ==="password"&& showPassword.value?"text":props.type
})
</script>
