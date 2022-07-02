<template>
  <router-link
    :to="{ name: 'bookDetail', params: { bookId: props.id } }"
    class="card__container mx-2 mb-6 h-[30vh] w-[calc(50%-1rem)] bg-white shadow-lg active:scale-95"
  >
    <div
      class="card__mask flex-center relative h-[80%] overflow-hidden bg-yellow-300 p-4 lg:bg-gray-600"
    >
      <p class="z-[10] text-center font-medium text-black">
        {{ title }}
      </p>
    </div>
    <div class="flex-center z-[20] h-[20%] w-full py-4">
      <p class="ml-2 leading-none">{{ author }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps, toRef } from 'vue'
const props = defineProps({
  id: {
    type: Number,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  author: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  }
})

const title = toRef(props, 'title')
const author = toRef(props, 'author')
</script>

<style lang="postcss" scoped>
@media screen and (min-width: 1024px) {
  .card__mask::after {
    @apply absolute top-0 left-0 h-full w-full bg-yellow-300 content-[''];
  }
  .card__container:hover .card__mask::after {
    @apply mt-[100%] h-0 transition-all duration-[1s];
  }
  .card__container:hover .card__mask p {
    @apply text-white transition-all duration-[.5s];
  }
}
</style>
