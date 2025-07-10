/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: '个人笔记',
  description: 'Fangle 的个人笔记库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '前端',
        items: [
          { text: 'Vue', link: '/Vue/vue' },
          { text: 'Nuxt', link: '/nuxt/nuxt' },
          { text: 'Node', link: '/node/node' },
        ]
      },
      { 
        text: '随笔',
        items: [
          { text: '临时记录', link: '/临时记录' },
          { text: '文档教程', link: '/文档教程' },
          { text: '配置相关', link: '/配置相关' },
        ]
      },
    ],
    sidebar: [
      {
        text: '分类',
        items: [
          { text: 'Vue', link: '/Vue/vue' },
          { text: 'Nuxt', link: '/nuxt/nuxt' },
          { text: 'Node', link: '/node/node' },
          { text: '临时记录', link: '/临时记录' },
          { text: '文档教程', link: '/文档教程' },
          { text: '配置相关', link: '/配置相关' },
        ]
      }
    ]
  }
}

export default config