<template>
  <header-style :text="'新增書本'" :showGoBack="true" />
  <div class="bg-gray-100 min-h-screen flex items-center">
    <div class="container p-4">
      <edit-frame
        :editing="true"
        :editingContent="editingContent"
        class="mb-8"
      />
      <div class="flex justify-between">
        <button-frame
          :label="'取消'"
          :color="'#e5e7eb'"
          class="button"
          @handler="cancel()"
        />
        <button-frame
          :label="'新增'"
          :color="'#60a5fa'"
          class="button"
          @handler="create()"
        />
      </div>
    </div>
  </div>
  <toast-message
    :showToast="showSuccess"
    :message="'新增成功！'"
    @handler="router.replace({ name: 'bookList' })"
  />
  <toast-message
    :showToast="showError"
    :message="error"
    @handler="showError = false"
  />
</template>

<script setup>
import EditFrame from '@/components/EditFrame.vue'
import ButtonFrame from '@/components/ButtonFrame.vue'
import HeaderStyle from '@/components/HeaderStyle.vue'
import ToastMessage from '@/components/ToastMessage.vue'
import Qs from 'qs'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const error = ref()
const showError = ref(false)
const showSuccess = ref(false)
const router = useRouter()
const editingContent = ref({
  title: '',
  author: '',
  description: ''
})

const cancel = () => {
  editingContent.value.title = ''
  editingContent.value.author = ''
  editingContent.value.description = ''
  router.go(-1)
}

const create = () => {
  error.value = ''
  if (editingContent.value.author === '') error.value = '請輸入作者！'
  if (editingContent.value.title === '') error.value = '請輸入書名！'
  if (!error.value) {
    axios.post('/books/', Qs.stringify(editingContent.value)).then((res) => {
      showSuccess.value = true
    })
  } else {
    showError.value = true
  }
}
</script>

<style lang="postcss" scoped>
.button {
  @apply w-[46%] h-12;
}
</style>
