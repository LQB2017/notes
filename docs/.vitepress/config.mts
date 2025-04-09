import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  cleanUrls: true,
  base: '/notes/',
  title: "Own Notes",
  description: "自己的笔记",
  themeConfig: {
    outline: 'deep',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outlineTitle: '目录',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '知识地图', link: '/mindmap' },
      { text: '时间线', link: '/timeline' }
    ],

    sidebar: {
      '/cs/data-structures-algorithms/': [
        {
          text: '数据结构与算法',
          items: [
            // { text: '数据结构', link: '/cs/data-structures-algorithms/data-structures' },
          ]
        }
      ],
      '/cs/computer-organization/': [
        {
          text: '计算机组成原理',
          items: [
            // { text: '计算机系统概述', link: '/cs/computer-organization/overview' },
          ]
        }
      ],
      '/cs/os/': [
        {
          text: '操作系统',
          items: [
            // { text: '操作系统概述', link: '/cs/os/overview' },
          ]
        }
      ],
      '/cs/network/': [
        {
          text: '计算机网络',
          items: [
            // { text: '网络概述', link: '/cs/network/overview' },
          ]
        }
      ],
      '/cs/database/': [
        {
          text: '数据库',
          items: [
            // { text: '数据库概述', link: '/cs/database/overview' },
          ]
        }
      ],
      'cs/engineering/': [
        {
          text: '软件工程',
          items: [
            // { text: '软件工程概述', link: '/cs/engineering/overview' },
          ]
        }
      ],
      '/java/basic/': [
        {
          text: 'Java基础',
          items: [
            // { text: 'Java概述', link: '/java/basic/overview' },
          ]
        }
      ],
      '/java/advanced/': [
        {
          text: 'Java进阶',
          items: [
            // { text: 'Java反射', link: '/java/advanced/reflection' },
          ]
        }
      ],
      '/java/framework/': [
        {
          text: 'Java框架',
          items: [
            // { text: 'Spring框架', link: '/java/framework/spring' },
          ]
        }
      ],
      '/java/design/': [
        {
          text: '设计模式与架构',
          items: [
            // { text: '其他', link: '/java/design-pattern/other' }
          ]
        }
      ],
      'other/zikao/': [
        {
          text: '自考',
          items: [
            { text: '自学考试', link: '/other/zikao/自学考试' }
          ]
        },
        {
          text: '02323 操作系统概论',
          items: [
            { text: '第四章 内存管理', link: '/other/zikao/02323/第四章 内存管理' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
