<template>
  <div
    class="flex-center fixed top-0 z-[99] h-screen w-screen bg-black/10"
    v-if="showToast"
  >
    <div class="flex-center h-24 w-48 flex-col bg-white text-black">
      <span class="mb-4 text-lg font-bold">{{ props.message }}</span>
      <div class="flex">
        <button
          class="text-sm text-gray-800"
          @click="$emit('cancel')"
          v-if="showCancel"
        >
          取消
        </button>
        <button class="ml-4 text-sm text-gray-800" @click="$emit('handler')">
          確定
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onUnmounted, toRef, watch } from 'vue'
const props = defineProps({
  color: {
    type: String,
    default: '#60a5fa'
  },
  message: {
    type: String,
    default: 'message!'
  },
  showCancel: {
    type: Boolean,
    default: false
  },
  showToast: {
    type: Boolean,
    default: false
  }
})
const showToast = toRef(props, 'showToast')

watch(showToast, (nV, oV) => {
  if (nV) document.documentElement.style.overflow = 'hidden'
  else document.documentElement.style.overflow = 'visible'
})

onUnmounted(() => {
  document.documentElement.style.overflow = 'visible'
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
