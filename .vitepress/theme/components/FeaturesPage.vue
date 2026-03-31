<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { CATEGORIES } from '../../data/tools.js'

const activeId = ref(CATEGORIES[0].id)
const tabsRef  = ref(null)
const showLeft  = ref(false)
const showRight = ref(false)

function updateArrows() {
  const el = tabsRef.value
  if (!el) return
  showLeft.value  = el.scrollLeft > 4
  showRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

function scrollTabs(dir) {
  tabsRef.value?.scrollBy({ left: dir * 240, behavior: 'smooth' })
}

function scrollToSection(id) {
  const el = document.getElementById('cat-' + id)
  if (!el) return
  const offset = 120 // nav + tabs bar height
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
  activeId.value = id
}

let observer = null

onMounted(() => {
  nextTick(() => {
    updateArrows()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activeId.value = entry.target.dataset.id
        })
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 }
    )

    CATEGORIES.forEach(cat => {
      const el = document.getElementById('cat-' + cat.id)
      if (el) observer.observe(el)
    })
  })
})

onUnmounted(() => observer?.disconnect())

const totalTools = CATEGORIES.reduce((sum, c) => sum + c.tools.length, 0)
</script>

<template>
  <div class="features-page">

    <!-- Page header -->
    <div class="page-header">
      <h1>全部功能</h1>
      <p>{{ CATEGORIES.length }} 个分类，{{ totalTools }} 个脚本工具，覆盖完整的 Illustrator 工作流</p>
      <div class="stats-row">
        <div class="stat-item">
          <div class="stat-num">{{ totalTools }}+</div>
          <div class="stat-label">脚本工具</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">{{ CATEGORIES.length }}</div>
          <div class="stat-label">功能分类</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">Win+Mac</div>
          <div class="stat-label">双平台</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">MIT</div>
          <div class="stat-label">开源协议</div>
        </div>
      </div>
    </div>

    <!-- Sticky tabs bar -->
    <div class="tabs-wrap">
      <div class="tabs-inner">
        <button
          v-if="showLeft"
          class="tab-arrow"
          aria-label="向左滚动"
          @click="scrollTabs(-1)"
        >‹</button>
        <div
          class="tabs-scroll"
          ref="tabsRef"
          @scroll="updateArrows"
        >
          <button
            v-for="cat in CATEGORIES"
            :key="cat.id"
            class="tab-btn"
            :class="{ active: activeId === cat.id }"
            @click="scrollToSection(cat.id)"
          >
            <span>{{ cat.icon }}</span>
            {{ cat.name }}
          </button>
        </div>
        <button
          v-if="showRight"
          class="tab-arrow"
          aria-label="向右滚动"
          @click="scrollTabs(1)"
        >›</button>
      </div>
    </div>

    <!-- Category sections -->
    <div
      v-for="cat in CATEGORIES"
      :key="cat.id"
      :id="'cat-' + cat.id"
      :data-id="cat.id"
      class="cat-section"
    >
      <!-- Category header -->
      <div class="cat-header">
        <div class="cat-icon">{{ cat.icon }}</div>
        <div class="cat-header-text">
          <h2>
            {{ cat.name }}
            <span v-if="cat.comingSoon" class="coming-soon-badge">即将推出</span>
          </h2>
          <p>{{ cat.desc }}</p>
        </div>
      </div>

      <!-- Coming soon placeholder -->
      <div v-if="cat.comingSoon" class="coming-soon-placeholder">
        <div class="cs-icon">🚧</div>
        <p>该功能模块正在开发中，敬请期待</p>
      </div>

      <!-- Tool cards -->
      <div v-else class="tool-grid">
        <div
          v-for="tool in cat.tools"
          :key="tool.name"
          class="tool-card"
          :style="{ '--cat-color': cat.color }"
        >
          <div class="tool-card-name">{{ tool.name }}</div>
          <div class="tool-card-desc">{{ tool.desc }}</div>
        </div>
      </div>
    </div>

  </div>
</template>
