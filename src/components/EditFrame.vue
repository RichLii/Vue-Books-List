<template>
  <div>
    <div class="input__container">
      <label class="input__label">名稱</label>
      <div class="input__frame" v-if="!editing">
        {{ title }}
      </div>
      <input
        v-model="editingContent.title"
        class="input__frame input__outline"
        v-else
      />
    </div>
    <div class="input__container">
      <label class="input__label">作者</label>
      <div class="input__frame" v-if="!editing">
        {{ author }}
      </div>
      <input
        v-model="editingContent.author"
        class="input__frame input__outline"
        v-else
      />
    </div>
    <div class="relative bg-white">
      <label class="flex h-16 items-center whitespace-nowrap pl-8 font-bold"
        >備註</label
      >
      <div class="px-8 pb-8">
        <div class="h-[30vh] w-full overflow-auto break-all" v-if="!editing">
          <p>{{ description }}</p>
        </div>
        <textarea
          style="resize: none"
          class="input__outline h-[30vh] w-full"
          v-model="editingContent.description"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue'
const props = defineProps({
  editing: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  editingContent: {
    type: Object,
    default: undefined
  }
})
const title = toRef(props, 'title')
const author = toRef(props, 'author')
const editing = toRef(props, 'editing')
const description = toRef(props, 'description')
const editingContent = toRef(props, 'editingContent')
</script>

<style lang="postcss" scoped>
.input__frame {
  @apply flex h-16 w-full items-center overflow-x-auto whitespace-nowrap bg-white pl-24 pr-4;
}
.input__outline {
  @apply outline-none focus:outline-[2px] focus:outline-blue-400;
}
.input__container {
  @apply relative mb-12;
}
.input__label {
  @apply absolute top-1/2 w-24 -translate-y-1/2 bg-white pl-8 font-bold;
}
</style>
