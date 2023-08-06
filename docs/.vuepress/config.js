import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'Anastasia Samoyloff',
    description: 'Portfolio Project using VuePress',
    theme: defaultTheme({
        // default theme config
        logo: 'images/logo.svg',
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Guide',
            link: '/guide',
          },
          {
            text: 'Contact',
            link: '/contact',
          },
        ],
    }),
}