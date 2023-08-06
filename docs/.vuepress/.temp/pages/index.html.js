export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.svg\",\"heroText\":\"Anastasia Samoyloff\",\"tagline\":\"UX Designer and Illustrator\",\"actions\":[{\"text\":\"View Portfolio\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Feature 1 Title\",\"details\":\"Feature 1 Description\"},{\"title\":\"Feature 2 Title\",\"details\":\"Feature 2 Description\"},{\"title\":\"Feature 3 Title\",\"details\":\"Feature 3 Description\"}],\"footer\":\"Footer\"},\"headers\":[],\"git\":{\"updatedTime\":1691358934000,\"contributors\":[{\"name\":\"Nas Samoyloff\",\"email\":\"samo0018@algonquinlive.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")

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
