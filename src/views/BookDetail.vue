<template>
  <div>
    <header-style
      :text="'書本名稱'"
      :status="'edit'"
      @startEdit="editable = $event"
    />
    <div class="bg-gray-100 min-h-screen flex items-center">
      <div class="container p-4">
        <form>
          <div class="mb-12 relative">
            <label class="absolute pl-8 top-1/2 -translate-y-1/2 font-bold"
              >名稱</label
            >
            <div
              type="text"
              :contenteditable="editable"
              class="inputPosition text-justify flex items-center bg-white pl-24 h-16 w-full outline-none focus:outline-[2px] focus:outline-blue-400"
            ></div>
          </div>
          <div class="mb-12 relative">
            <label class="absolute pl-8 top-1/2 -translate-y-1/2 font-bold"
              >作者</label
            >
            <div
              :contenteditable="editable"
              type="text"
              class="inputPosition flex items-center pl-24 h-16 bg-white w-full outline-none focus:outline-[2px] focus:outline-blue-400"
            ></div>
          </div>
          <div class="relative bg-white">
            <label
              class="whitespace-nowrap h-16 flex items-center pl-8 font-bold"
              >備註</label
            >
            <div class="px-8 pb-8">
              <div
                :contenteditable="editable"
                type="text"
                class="pb-4 h-[35vh] w-full outline-none break-all overflow-auto focus:outline-[2px] focus:outline-blue-400"
              ></div>
            </div>
          </div>
        </form>
        <div v-if="editable">
          <button @click="cancelEdit">取消</button>
          <button class="ml-4">修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderStyle from '@/components/HeaderStyle.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const title = ref('')
const author = ref('')
const description = ref('')
const editable = ref(false)
const route = useRoute()
onMounted(() => {
  axios
    .get(`/books/${route.params.bookId}`)
    .then((res) => {
      title.value = res.data.title
      author.value = res.data.author
      description.value = res.data.description
    })
    .catch(() => {
      window.location.href = '/404'
    })
})
</script>

<style lang="postcss" scoped>
.inputPosition::before {
  display: inline;
  content: '\A';
  white-space: pre-line;
}
.inputPosition::first-line {
  font-size: 0;
}
</style>
