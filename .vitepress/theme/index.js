import { Fragment, h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import FeaturesPage from './components/FeaturesPage.vue'
import SupportPage from './components/SupportPage.vue'
import BackToTopButton from './components/BackToTopButton.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(Fragment, [
      h(DefaultTheme.Layout),
      h(BackToTopButton),
    ])
  },
  enhanceApp({ app }) {
    app.component('FeaturesPage', FeaturesPage)
    app.component('SupportPage', SupportPage)
  },
}
