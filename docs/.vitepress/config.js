/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  base: '/',
  title: '个人笔记',
  description: 'Fangle 的个人笔记库',
  themeConfig: {
    outline: {
      level: [2, 6],
      label: '页面导航'
    },
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
      {
        text:'阅读',
        items: [
          { text: '书单', link: '/读书/书单' },
        ]
      },
      { 
        text: '感悟',
        items: [
          { text: '人生感悟', link: '/感悟/人生感悟' },
          { text: '技术感悟', link: '/感悟/技术感悟' },
          { text: '读书感悟', link: '/感悟/读书感悟' },
          { text: '工作感悟', link: '/感悟/工作感悟' },
        ]
      },
    ],
    sidebar: {
      '/Vue/': [
        {
          text: '前端技术',
          items: [
            { text: 'Vue', link: '/Vue/vue' },
            { text: 'Nuxt', link: '/nuxt/nuxt' },
            { text: 'Node', link: '/node/node' },
          ]
        }
      ],
      '/nuxt/': [
        {
          text: '前端技术',
          items: [
            { text: 'Vue', link: '/Vue/vue' },
            { text: 'Nuxt', link: '/nuxt/nuxt' },
            { text: 'Node', link: '/node/node' },
          ]
        }
      ],
      '/node/': [
        {
          text: '前端技术',
          items: [
            { text: 'Vue', link: '/Vue/vue' },
            { text: 'Nuxt', link: '/nuxt/nuxt' },
            { text: 'Node', link: '/node/node' },
          ]
        }
      ],
      '/感悟/': [
        {
          text: '感悟分享',
          items: [
            { text: '人生感悟', link: '/感悟/人生感悟' },
            { text: '技术感悟', link: '/感悟/技术感悟' },
            { text: '读书感悟', link: '/感悟/读书感悟' },
            { text: '工作感悟', link: '/感悟/工作感悟' },
          ]
        }
      ],
      '/读书/': [
        {
          text: '阅读记录',
          items: [
            { text: '书单', link: '/读书/书单' },
          ]
        }
      ],
      '/': [
        {
          text: '随笔记录',
          items: [
            { text: '临时记录', link: '/临时记录' },
            { text: '文档教程', link: '/文档教程' },
            { text: '配置相关', link: '/配置相关' },
          ]
        }
      ]
    }
  }
}

export default config