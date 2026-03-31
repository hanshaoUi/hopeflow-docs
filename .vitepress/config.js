import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_ACTIONS ? '/hopeflow-docs/' : '/'

export default defineConfig({
  title: 'HopeFlow Toolbox',
  description: '专为 Adobe Illustrator 设计师打造的开源效率插件',
  lang: 'zh-CN',
  base,

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#6c8ef5' }],
  ],

  themeConfig: {
    siteTitle: 'HopeFlow Toolbox',

    // ── 顶部导航 ──────────────────────────────────────
    nav: [
      { text: '全部功能', link: '/features' },
      {
        text: '文档',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: 'Windows 安装', link: '/guide/install-windows' },
          { text: 'macOS 安装', link: '/guide/install-macos' },
          { text: '卸载插件', link: '/guide/uninstall' },
        ],
      },
      {
        text: '常见问题',
        items: [
          { text: '安装与兼容', link: '/faq/' },
          { text: '功能使用', link: '/faq/usage' },
          { text: '版本与更新', link: '/faq/update' },
          { text: '开源与贡献', link: '/faq/contribute' },
        ],
      },
      { text: '更新日志', link: '/changelog' },
      { text: '支持作者', link: '/support' },
    ],

    // ── 侧边栏（仅在文档/FAQ 页显示）────────────────
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: 'Windows 安装', link: '/guide/install-windows' },
            { text: 'macOS 安装', link: '/guide/install-macos' },
            { text: '卸载插件', link: '/guide/uninstall' },
          ],
        },
      ],
      '/faq/': [
        {
          text: '常见问题',
          items: [
            { text: '安装与兼容', link: '/faq/' },
            { text: '功能使用', link: '/faq/usage' },
            { text: '版本与更新', link: '/faq/update' },
            { text: '开源与贡献', link: '/faq/contribute' },
          ],
        },
        {
          text: '其他',
          items: [
            { text: '更新日志', link: '/changelog' },
            { text: '参与贡献', link: '/contributing' },
            { text: '致谢', link: '/credits' },
          ],
        },
      ],
    },

    // ── 本地搜索 ──────────────────────────────────────
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hanshaoUi/hopeflow-docs' },
    ],

    footer: {
      message: '基于 MIT 协议开源发布',
      copyright: 'Copyright © 2026 HopeFlow Toolbox',
    },

    editLink: {
      pattern: 'https://github.com/hanshaoUi/hopeflow-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '本页目录', level: [2, 3] },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
  },

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
})
