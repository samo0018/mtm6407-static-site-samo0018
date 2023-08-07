export const data = JSON.parse("{\"key\":\"v-22a39d25\",\"path\":\"/about.html\",\"title\":\"About Me\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About Me\",\"description\":\"Description of the about page\",\"layout\":\"About\"},\"headers\":[],\"git\":{\"updatedTime\":1691382699000,\"contributors\":[{\"name\":\"Nas Samoyloff\",\"email\":\"samo0018@algonquinlive.com\",\"commits\":1}]},\"filePathRelative\":\"about.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
