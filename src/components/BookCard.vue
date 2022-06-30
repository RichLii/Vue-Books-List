<template>
  <router-link
    :to="{ name: 'bookDetail', params: { bookId: props.id } }"
    class="h-[32vh] w-[calc(50%-1rem)] bg-white mb-6 mx-2"
  >
    <div>
      <p>{{ title }}</p>
      <p>{{ author }}</p>
      <p>{{ description }}</p>
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
const description = toRef(props, 'description')
</script>
