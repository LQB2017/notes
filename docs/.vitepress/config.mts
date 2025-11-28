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
      { text: '时间线', link: '/timeline' }
    ],
    sidebar: {
      // '/计算机基础/数据结构与算法/': [
      //   {
      //     text: '数据结构与算法',
      //     items: [
      //       // { text: '数据结构', link: '/cs/data-structures-algorithms/data-structures' },
      //     ]
      //   }
      // ],
      // '/计算机基础/计算机组成原理/': [
      //   {
      //     text: '计算机组成原理',
      //     items: [
      //       // { text: '计算机系统概述', link: '/cs/computer-organization/overview' },
      //     ]
      //   }
      // ],
      // '/计算机基础/操作系统/': [
      //   {
      //     text: '操作系统',
      //     items: [
      //       // { text: '操作系统概述', link: '/cs/os/overview' },
      //     ]
      //   }
      // ],
      // '/计算机基础/计算机网络/': [
      //   {
      //     text: '计算机网络',
      //     items: [
      //       // { text: '网络概述', link: '/cs/network/overview' },
      //     ]
      //   }
      // ],
      // '/计算机基础/数据库系统/': [
      //   {
      //     text: '数据库',
      //     items: [
      //       // { text: '数据库概述', link: '/cs/database/overview' },
      //     ]
      //   }
      // ],
      // '/计算机基础/软件工程/': [
      //   {
      //     text: '软件工程',
      //     items: [
      //       // { text: '软件工程概述', link: '/cs/engineering/overview' },
      //     ]
      //   }
      // ],
      // '/Java语言/Java基础/': [
      //   {
      //     text: 'Java基础',
      //     items: [
      //       // { text: 'Java概述', link: '/java/basic/overview' },
      //     ]
      //   }
      // ],
      // '/Java语言/Java进阶/': [
      //   {
      //     text: 'Java进阶',
      //     items: [
      //       // { text: 'Java反射', link: '/java/advanced/reflection' },
      //     ]
      //   }
      // ],
      // '/Java语言/Java框架/': [
      //   {
      //     text: 'Java框架',
      //     items: [
      //       // { text: 'Spring框架', link: '/java/framework/spring' },
      //     ]
      //   }
      // ],
      // '/Java语言/设计模式与架构/': [
      //   {
      //     text: '设计模式与架构',
      //     items: [
      //       // { text: '其他', link: '/java/design-pattern/other' }
      //     ]
      //   }
      // ],
      '/自考/': [
        {
          text: '03173 软件开发工具(实践)',
          items: [
            { text: '第四章 内存管理', link: '/other/zikao/02323/第四章 内存管理' }
          ]
        },
        {
          text: '21048 计算机信息管理本科毕业设计(实)',
          items: [
            { text: '第四章 内存管理', link: '/other/zikao/02323/第四章 内存管理' }
          ]
        },
        {
          text: '04183 概率论与数理统计(经管类)',
          items: [
            { text: '第四章 内存管理', link: '/other/zikao/02323/第四章 内存管理' }
          ]
        },
        {
          text: '04757 信息系统开发与管理',
          items: [
            { text: '第四章 内存管理', link: '/other/zikao/02323/第四章 内存管理' }
          ]
        },
        {
          text: '13015 计算机系统原理',
          items: [
            { text: '第四章 内存管理', link: '/other/zikao/02323/第四章 内存管理' }
          ]
        },
        {
          text: '02378 信息资源管理',
          items: [
            { text: '第四章 内存管理', link: '/other/zikao/02323/第四章 内存管理' }
          ]
        },
        {
          text: 'PETS 三级',
          items: [
            { text: '阅读理解', link: '/other/zikao/PETS 三级/阅读理解' }
          ]
        }
      ],
      '/英语/': [
        {
          text: '英语',
          items: [
            { text: '英语', link: '/英语' }
          ]
        }
      ],
      '/书法/': [
        {
          text: '书法',
          items: [
            { text: '书法', link: '/书法' }
          ]
        }
      ],
      '/健身/': [
        {
          text: '健身',
          items: [
            { text: '健身', link: '/健身' }
          ]
        }
      ]
    }
  }
})
