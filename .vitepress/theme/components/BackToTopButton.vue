<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)
const showAfter = 480

function updateVisibility() {
  isVisible.value = window.scrollY > showAfter
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="back-to-top">
      <button
        v-if="isVisible"
        class="back-to-top-btn"
        type="button"
        aria-label="返回顶部"
        @click="scrollToTop"
      >
        ↑
      </button>
    </Transition>
  </Teleport>
</template>
