<template>
  <div>
    <header-style
      :text="'書本名稱'"
      :status="'edit'"
      :showGoBack="true"
      @startEdit="startEditing"
    />
    <div class="bg-gray-100 min-h-screen flex items-center">
      <div class="container p-4">
        <edit-frame
          :editing="editing"
          :title="title"
          :author="author"
          :description="description"
          :editingContent="editingContent"
        />
        <div v-if="editing">
          <button @click="cancelEditing">取消</button>
          <button class="ml-4">修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EditFrame from '@/components/EditFrame.vue'
import HeaderStyle from '@/components/HeaderStyle.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const title = ref('')
const author = ref('')
const description = ref('')
const editing = ref(false)
const route = useRoute()
const editingContent = ref({
  title: '',
  author: '',
  description: ''
})

const startEditing = () => {
  editing.value = true
  editingContent.value.title = title.value
  editingContent.value.author = author.value
  editingContent.value.description = description.value
}

const cancelEditing = () => {
  editing.value = false
  editingContent.value.title = title.value
  editingContent.value.author = author.value
  editingContent.value.description = description.value
}

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
.input__frame {
  @apply flex items-center bg-white pl-24 h-16 w-full;
}
.input__outline {
  @apply outline-none focus:outline-[2px] focus:outline-blue-400;
}
.input__container {
  @apply mb-12 relative;
}
.input__label {
  @apply absolute pl-8 top-1/2 -translate-y-1/2 font-bold;
}
</style>
