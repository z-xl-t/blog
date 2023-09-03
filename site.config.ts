import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  url: 'https://blog.z-xl-t.top',
  pageSize: 10,
  title: '薯条流浪法师',
  description: '薯条流浪法师的个人博客',
  favicon: '/favicon.jpg',
  // 无需修改 selector
  mediumZoom: {
    enable: true,
    selector: '.markdown img',
  },
})
