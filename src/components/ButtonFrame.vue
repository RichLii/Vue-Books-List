<template>
  <div>
    <button
      class="h-full w-full rounded-[99rem] text-xl font-bold text-white"
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
