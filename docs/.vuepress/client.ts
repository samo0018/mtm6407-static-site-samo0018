import { defineClientConfig } from '@vuepress/client'
import CustomLayout from './layouts/CustomLayout.vue'
import Contact from './layouts/Contact.vue'
import About from './layouts/About.vue'
import Resume from './layouts/Resume.vue'

export default defineClientConfig({
  layouts: {
    About,
    Resume,
    CustomLayout,
    Contact,
  },
})