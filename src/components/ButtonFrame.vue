<template>
  <div>
    <button
      class="text-white text-xl font-bold rounded-[99rem] w-full h-full"
      :style="{ background: props.color }"
      @click="$emit('handler')"
    >
      {{ props.label }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  color: {
    type: String,
    default: 'blue'
  },
  label: {
    type: String,
    default: 'button'
  }
})
</script>
