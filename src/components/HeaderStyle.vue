<template>
  <div class="sticky top-0 bg-white">
    <div class="container">
      <div class="flex items-center justify-center h-14 relative">
        <h1 class="text-2xl font-bold">{{ text }}</h1>
        <button
          class="button left-5 hover:bg-gray-100"
          @click="goBack"
          v-if="showGoBack"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-gray-900"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              stroke="currentColor"
              stroke-width="1"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <button
          class="button right-5 text-blue-500 hover:bg-blue-100/50 p-1"
          v-if="status"
        >
          <template v-if="status === 'edit'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-5 h-5"
              viewBox="0 0 16 16"
              style="color: #3b82f6"
              @click="$emit('startEdit', true)"
            >
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
              />
            </svg>
          </template>
          <template v-if="status === 'create'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  text: {
    type: String,
    default: 'header'
  },
  status: {
    type: String,
    default: undefined
  },
  showGoBack: {
    type: Boolean,
    default: true
  }
})
const router = useRouter()
const text = toRef(props, 'text')
const status = toRef(props, 'status')
const showGoBack = toRef(props, 'showGoBack')
const goBack = () => {
  router.go(-1)
}
</script>

<style lang="postcss" scoped>
.button {
  @apply absolute rounded-full w-8 h-8 flex items-center justify-center;
}
</style>
