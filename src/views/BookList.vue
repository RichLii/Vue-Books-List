<template>
  <div>
    <header-style :text="'書本列表'" :status="'create'" />
    <div class="bg-gray-100 min-h-screen">
      <div class="container p-4">
        <div class="flex items-center justify-center flex-wrap">
          <book-card
            v-for="book of bookDetail"
            :key="book"
            :id="book.id"
            :title="book.title"
            :author="book.author"
            :description="book.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import BookCard from '@/components/BookCard.vue'
import HeaderStyle from '@/components/HeaderStyle.vue'
import { onMounted, ref } from 'vue'
const bookDetail = ref('')
onMounted(() => {
  axios.get('/books/').then((res) => {
    bookDetail.value = res.data
  })
})
</script>

<style lang="postcss" scoped></style>
