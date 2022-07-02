<template>
  <div
    class="fixed z-[99] top-0 flex items-center justify-center h-screen w-screen bg-black/10"
    v-if="showToast"
  >
    <div
      class="text-black bg-white w-48 h-24 flex flex-col items-center justify-center"
    >
      <span class="mb-4 font-bold text-lg">{{ props.message }}</span>
      <button class="text-gray-800 text-sm" @click="$emit('handler')">
        確定
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  color: {
    type: String,
    default: '#60a5fa'
  },
  message: {
    type: String,
    default: 'message!'
  },
  showToast: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="postcss" scoped>
.ani__slide {
  animation: slide__in 0.5s ease-in-out forwards,
    slide__out 0.5s 1.5s ease-in-out forwards;
}
@keyframes slide__in {
  to {
    top: 0;
  }
}
@keyframes slide__out {
  to {
    top: -100%;
  }
}
</style>
