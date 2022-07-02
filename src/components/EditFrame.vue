<template>
  <div>
    <div class="input__container">
      <label class="input__label">名稱</label>
      <div class="input__frame" ref="titleFrame" id="title" v-if="!editing">
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
      <div class="input__frame" ref="authorFrame" id="author" v-if="!editing">
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
import { defineProps, onBeforeUnmount, onMounted, ref, toRef } from 'vue'
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
const titleFrame = ref()
const authorFrame = ref()
const title = toRef(props, 'title')
const author = toRef(props, 'author')
const editing = toRef(props, 'editing')
const description = toRef(props, 'description')
const editingContent = toRef(props, 'editingContent')

const scrollX = (e) => {
  e.preventDefault()
  if (e.target.id === 'title') titleFrame.value.scrollLeft += e.deltaY
  if (e.target.id === 'author') authorFrame.value.scrollLeft += e.deltaY
}

onMounted(() => {
  if (!editing.value) {
    titleFrame.value.addEventListener('wheel', scrollX)
    authorFrame.value.addEventListener('wheel', scrollX)
  }
})

onBeforeUnmount(() => {
  if (titleFrame.value && authorFrame.value) {
    titleFrame.value.removeEventListener('wheel', scrollX)
    authorFrame.value.removeEventListener('wheel', scrollX)
  }
})
</script>

<style lang="postcss" scoped>
.input__frame {
  @apply flex h-16 w-full items-center overflow-x-auto whitespace-nowrap bg-white pl-24 pr-4;
  scrollbar-width: none;
}
.input__frame::-webkit-scrollbar {
  display: none;
}
.input__outline {
  @apply outline-none focus:outline-[2px] focus:outline-blue-400;
}
.input__container {
  @apply relative mb-12;
}
.input__label {
  @apply y-center absolute w-24 bg-white pl-8 font-bold;
}
</style>
