<script setup>
const CONTACTS = [
  {
    icon: '🐞',
    title: '提交 Bug 报告',
    desc: '如果你遇到异常、崩溃或行为不符合预期，可以通过 Issue 提交问题，便于定位和修复。',
    link: 'https://github.com/hanshaoUi/hopeflow-toolbox/issues/new',
    label: 'GitHub Issues →',
  },
  {
    icon: '💡',
    title: '功能建议',
    desc: '有新的工具想法，或想改进现有功能，也可以通过 Issue 发起讨论。',
    link: 'https://github.com/hanshaoUi/hopeflow-toolbox/issues/new',
    label: '提交建议 →',
  },
  {
    icon: '💬',
    title: '社区讨论',
    desc: '使用技巧、工作流经验、版本规划等内容，适合放到 Discussions 中交流。',
    link: 'https://github.com/hanshaoUi/hopeflow-toolbox/discussions',
    label: '加入讨论 →',
  },
  {
    icon: '🛠',
    title: '贡献代码',
    desc: '欢迎提交 PR，文档修订、页面改进和问题修复都可以直接参与。',
    link: 'https://github.com/hanshaoUi/hopeflow-toolbox/pulls',
    label: '查看 PR →',
  },
]
</script>

<template>
  <div class="support-page">
    <h1>
      觉得好用，
      <span style="color: var(--vp-c-brand-1)">请我喝杯咖啡</span>
    </h1>

    <p class="subtitle">
      HopeFlow Toolbox 会持续维护和更新。如果这套工具为你节省了时间，欢迎通过赞赏支持项目继续迭代。
      遇到问题也可以先查看
      <a href="./faq/" style="color: var(--vp-c-brand-1); margin: 0 2px;">常见问题文档</a>。
    </p>

    <div class="section-label">赞赏支持</div>
    <div class="qr-grid">
      <div class="qr-card">
        <div class="qr-placeholder">🧧</div>
        <h3>微信支付</h3>
        <p>长按或扫码进行支持</p>
      </div>
      <div class="qr-card">
        <div class="qr-placeholder">💸</div>
        <h3>支付宝</h3>
        <p>长按或扫码进行支持</p>
      </div>
    </div>

    <div class="section-label">关于作者</div>
    <div style="background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 14px; padding: 28px; margin-bottom: 40px;">
      <p style="font-size: 15px; line-height: 1.8; color: var(--vp-c-text-2); margin: 0;">
        HopeFlow Toolbox 来自真实设计工作中的重复劳动痛点。项目会继续保持开源，也欢迎你通过反馈、
        讨论、Issue 和 PR 一起把它做得更稳定、更实用。
      </p>
    </div>

    <div class="section-label">参与 & 联系</div>
    <div class="contact-grid">
      <div v-for="c in CONTACTS" :key="c.title" class="contact-card">
        <div class="cc-icon">{{ c.icon }}</div>
        <h4>{{ c.title }}</h4>
        <p>{{ c.desc }}</p>
        <a :href="c.link" target="_blank" rel="noreferrer" class="cc-link">{{ c.label }}</a>
      </div>
    </div>
  </div>
</template>
