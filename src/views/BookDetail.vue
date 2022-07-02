<template>
  <div>
    <header-style
      :text="title"
      :status="'edit'"
      :showGoBack="true"
      @startEdit="startEditing"
    />
    <div class="flex min-h-screen items-center bg-gray-100">
      <div class="container p-4">
        <edit-frame
          :editing="editing"
          :title="title"
          :author="author"
          :description="description"
          :editingContent="editingContent"
          class="mb-8"
        />
        <div v-if="editing">
          <div class="mb-4 flex justify-between">
            <button-frame
              :label="'取消'"
              :color="'#e5e7eb'"
              class="button"
              @handler="cancelEditing()"
            />
            <button-frame
              :label="'修改'"
              :color="'#60a5fa'"
              class="button"
              @handler="modify()"
            />
          </div>
          <div class="flex w-full">
            <button
              class="ml-auto rounded px-2 py-1 text-lg text-red-500 underline active:bg-red-100"
              @click="showDeleteMessage = true"
            >
              刪除書本
            </button>
          </div>
        </div>
      </div>
    </div>
    <toast-message
      :showToast="showSuccess"
      :message="'修改成功！'"
      @handler="router.go(0)"
    />
    <toast-message
      :showToast="showDeleteMessage"
      :message="'確定要刪除嗎？'"
      :showCancel="true"
      @cancel="showDeleteMessage = false"
      @handler="deleteBook()"
    />
    <toast-message
      :showToast="showError"
      :message="error"
      @handler="showError = false"
    />
  </div>
</template>

<script setup>
import ToastMessage from '@/components/ToastMessage.vue'
import EditFrame from '@/components/EditFrame.vue'
import ButtonFrame from '@/components/ButtonFrame.vue'
import HeaderStyle from '@/components/HeaderStyle.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const title = ref('')
const author = ref('')
const error = ref('')
const showError = ref(false)
const showSuccess = ref(false)
const showDeleteMessage = ref(false)
const route = useRoute()
const router = useRouter()
const editing = ref(false)
const description = ref('')
const editingContent = ref({
  title: '',
  author: '',
  description: ''
})
const bookUrl = `/books/${route.params.bookId}`

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

const deleteBook = () => {
  axios
    .delete(bookUrl)
    .then(() => {
      router.replace({ name: 'bookList' })
    })
    .catch(() => {
      error.value = '出了某些錯誤，按確認重新整理'
      showError.value = true
    })
}

const modify = () => {
  error.value = ''
  if (editingContent.value.author === '') error.value = '請輸入書名！'
  if (editingContent.value.title === '') error.value = '請輸入作者！'
  if (!error.value) {
    axios
      .patch(bookUrl, editingContent.value)
      .then(() => {
        showSuccess.value = true
      })
      .catch(() => {
        error.value = '出了某些錯誤，按確認重新整理'
        showError.value = true
      })
  } else {
    showError.value = true
  }
}

onMounted(() => {
  axios
    .get(bookUrl)
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
  @apply flex h-16 w-full items-center bg-white pl-24;
}
.input__outline {
  @apply outline-none focus:outline-[2px] focus:outline-blue-400;
}
.input__container {
  @apply relative mb-12;
}
.input__label {
  @apply absolute top-1/2 -translate-y-1/2 pl-8 font-bold;
}
.button {
  @apply h-12 w-[46%];
}
</style>
