import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/own/',
  title: "own",
  description: "My own",
  themeConfig: {
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
      '/java/': [
        {
          text: 'Java',
          items: [
            { text: 'Java', link: '/java/java' },
            { text: 'Spring', link: '/java/spring' },
            { text: 'Mybatis', link: '/java/mybatis' },
            { text: 'JVM', link: '/java/jvm' },
            { text: '算法', link: '/java/algorithm' },
            { text: '设计模式', link: '/java/design' },
            { text: '微服务', link: '/java/microservice' },
            { text: '数据库', link: '/java/database' },
            { text: '系统', link: '/java/system' },
            { text: '网络', link: '/java/network' },
            { text: '工具', link: '/java/tools' },
            { text: '其他', link: '/java/other' },
          ]
        }
      ],
      '/cs/': [
        {
          text: '计算机科学',
          items: [
            { text: '计算机组成原理', link: '/cs/architecture' },
            { text: '操作系统', link: '/cs/os' },
            { text: '数据结构与算法', link: '/cs/datastructure' },
            { text: '计算机网络', link: '/cs/network' },
            { text: '数据库', link: '/cs/database' },
            { text: '编译原理', link: '/cs/compiler' },
            { text: '人工智能', link: '/cs/ai' },
            { text: '系统', link: '/cs/system' },
            { text: '其他', link: '/cs/other' },
          ]
        }
      ],
      '/bigdata/': [
        {
          text: '大数据',
          items: [
            { text: '大数据', link: '/bigdata/bigdata' },
            { text: 'Hadoop', link: '/bigdata/hadoop' },
            { text: 'Spark', link: '/bigdata/spark' },
            { text: 'Flink', link: '/bigdata/flink' },
            { text: 'Hive', link: '/bigdata/hive' },
            { text: 'Hbase', link: '/bigdata/hbase' },
            { text: 'Kafka', link: '/bigdata/kafka' },
            { text: 'Zookeeper', link: '/bigdata/zookeeper' },
            { text: '其他', link: '/bigdata/other' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
