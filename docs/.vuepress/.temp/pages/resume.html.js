export const data = JSON.parse("{\"key\":\"v-2b463433\",\"path\":\"/resume.html\",\"title\":\"Resume\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Resume\",\"description\":\"Description of the resume page\",\"layout\":\"Resume\"},\"headers\":[],\"git\":{\"updatedTime\":1691382699000,\"contributors\":[{\"name\":\"Nas Samoyloff\",\"email\":\"samo0018@algonquinlive.com\",\"commits\":1}]},\"filePathRelative\":\"resume.md\"}")

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
