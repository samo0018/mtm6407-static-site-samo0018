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
            text: 'About',
            link: '/about',
          },
          {
            text: 'Resume',
            link: '/resume',
          },
          {
            text: 'Portfolio',
            link: '/guide',
          },
          {
            text: 'Contact',
            link: '/contact',
          },
        ],
    }),
}

module.exports = {
  title: 'Portfolio',
  description: 'Portfolio for Github',
  base: "/mtm6407-static-site-samo0018/"
}