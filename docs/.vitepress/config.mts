import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  cleanUrls: true,
  base: '/notes/',
  title: "Own Notes",
  description: "自己的笔记",
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
      '/cs/data-structures-algorithms/': [
        {
          text: '数据结构与算法',
          items: [
            {
              text: '数据结构',
              link: '/cs/datastructure',
              items: [
                { text: '数组', link: '/cs/data-structures-algorithms/datastructure/array' },
                { text: '链表', link: '/cs/data-structures-algorithms/datastructure/linkedlist' },
                { text: '栈', link: '/cs/data-structures-algorithms/datastructure/stack' },
                { text: '队列', link: '/cs/data-structures-algorithms/datastructure/queue' },
                { text: '树', link: '/cs/data-structures-algorithms/datastructure/tree' },
                { text: '图', link: '/cs/data-structures-algorithms/datastructure/graph' },
                { text: '散列表', link: '/cs/data-structures-algorithms/datastructure/hash' },
                { text: '堆', link: '/cs/data-structures-algorithms/datastructure/heap' },
                { text: '字典树', link: '/cs/data-structures-algorithms/datastructure/trie' },
                { text: '并查集', link: '/cs/data-structures-algorithms/datastructure/disjointset' },
                { text: '集合', link: '/cs/data-structures-algorithms/datastructure/set' },
                { text: '字典', link: '/cs/data-structures-algorithms/datastructure/dictionary' },
              ]
            },
            {
              text: '算法', link: '/cs/algorithm',
              items: [
                { text: '排序', link: '/cs/data-structures-algorithms/algorithm/sort' },
                { text: '搜索', link: '/cs/data-structures-algorithms/algorithm/search' },
                { text: '贪心', link: '/cs/data-structures-algorithms/algorithm/greedy' },
                { text: '动态规划', link: '/data-structures-algorithms/cs/algorithm/dynamicprogramming' },
                { text: '分治', link: '/cs/data-structures-algorithms/algorithm/divideandconquer' },
                { text: '回溯', link: '/cs/data-structures-algorithms/algorithm/backtracking' },
                { text: '递归', link: '/cs/data-structures-algorithms/algorithm/recursion' },
                { text: '迭代', link: '/cs/data-structures-algorithms/algorithm/iteration' },
                { text: '位运算', link: '/cs/data-structures-algorithms/algorithm/bitoperation' },
                { text: '字符串', link: '/cs/data-structures-algorithms/algorithm/string' },
                { text: '数组', link: '/cs/data-structures-algorithms/algorithm/array' },
                { text: '链表', link: '/cs/data-structures-algorithms/algorithm/linkedlist' },
                { text: '树', link: '/cs/data-structures-algorithms/algorithm/tree' },
                { text: '图', link: '/cs/data-structures-algorithms/algorithm/graph' },
                { text: '散列表', link: '/cs/data-structures-algorithms/algorithm/hash' },
                { text: '堆', link: '/cs/data-structures-algorithms/algorithm/heap' },
                { text: '字典树', link: '/cs/data-structures-algorithms/algorithm/trie' },
                { text: '并查集', link: '/cs/data-structures-algorithms/algorithm/disjointset' },
                { text: '集合', link: '/cs/data-structures-algorithms/algorithm/set' },
                { text: '字典', link: '/cs/data-structures-algorithms/algorithm/dictionary' },
              ]
            }
          ]
        }
      ],
      '/cs/computer-organization/': [
        {
          text: '计算机组成原理',
          items: [
            { text: '计算机系统概述', link: '/cs/computer-organization/overview' },
            {
              text: '数据的表示与运算',
              link: '/cs/computer-organization/data-representation',
              items: [
                { text: '数值数据表示', link: '/cs/computer-organization/data-representation/numeric' },
                { text: '非数值数据表示', link: '/cs/computer-organization/data-representation/non-numeric' },
                { text: '运算方法与运算器', link: '/cs/computer-organization/data-representation/arithmetic' }
              ]
            },
            {
              text: '存储器系统',
              link: '/cs/computer-organization/memory-system',
              items: [
                { text: '存储器层次结构', link: '/cs/computer-organization/memory-system/hierarchy' },
                { text: '主存储器设计', link: '/cs/computer-organization/memory-system/main-memory' },
                { text: '高速缓存(Cache)', link: '/cs/computer-organization/memory-system/cache' },
                { text: '虚拟存储器', link: '/cs/computer-organization/memory-system/virtual-memory' }
              ]
            },
            {
              text: '指令系统',
              link: '/cs/computer-organization/instruction-set',
              items: [
                { text: '指令格式与寻址', link: '/cs/computer-organization/instruction-set/format' },
                { text: 'CISC与RISC架构', link: '/cs/computer-organization/instruction-set/architecture' },
                { text: '指令执行过程', link: '/cs/computer-organization/instruction-set/execution' }
              ]
            },
            {
              text: '中央处理器(CPU)',
              link: '/cs/computer-organization/cpu',
              items: [
                { text: 'CPU组成与功能', link: '/cs/computer-organization/cpu/components' },
                { text: '数据通路设计', link: '/cs/computer-organization/cpu/datapath' },
                { text: '流水线技术', link: '/cs/computer-organization/cpu/pipeline' },
                { text: '中断与异常', link: '/cs/computer-organization/cpu/interrupts' }
              ]
            },
            {
              text: '总线与I/O系统',
              link: '/cs/computer-organization/io-system',
              items: [
                { text: '总线结构', link: '/cs/computer-organization/io-system/bus' },
                { text: 'I/O接口与传输', link: '/cs/computer-organization/io-system/interface' },
                { text: 'DMA技术', link: '/cs/computer-organization/io-system/dma' }
              ]
            },
            {
              text: '高级主题',
              link: '/cs/computer-organization/advanced-topics',
              items: [
                { text: '并行处理技术', link: '/cs/computer-organization/advanced-topics/parallel' },
                { text: '新型存储技术', link: '/cs/computer-organization/advanced-topics/storage' },
                { text: 'RISC-V架构', link: '/cs/computer-organization/advanced-topics/riscv' }
              ]
            },
            {
              text: '实验与设计',
              link: '/cs/computer-organization/labs',
              items: [
                { text: 'ALU设计', link: '/cs/computer-organization/labs/alu' },
                { text: 'Cache仿真', link: '/cs/computer-organization/labs/cache' },
                { text: 'CPU设计实践', link: '/cs/computer-organization/labs/cpu-design' }
              ]
            }
          ]
        }
      ],
      '/cs/os/': [
        {
          text: '操作系统',
          items: [
            { text: '操作系统概述', link: '/cs/os/overview' },
            { text: '进程管理', link: '/cs/os/process' },
            { text: '内存管理', link: '/cs/os/memory' },
            { text: '文件系统', link: '/cs/os/filesystem' },
            { text: '设备管理', link: '/cs/os/device' },
            { text: '线程管理', link: '/cs/os/thread' },
            { text: '同步与通信', link: '/cs/os/synchronization' },
            { text: '调度算法', link: '/cs/os/scheduling' },
            { text: '死锁', link: '/cs/os/deadlock' },
            { text: '其他', link: '/cs/os/other' }
          ]
        }
      ],
      '/cs/network/': [
        {
          text: '计算机网络',
          items: [
            { text: '网络概述', link: '/cs/network/overview' },
            { text: '网络协议', link: '/cs/network/protocol' },
            { text: '网络模型', link: '/cs/network/model' },
            { text: '网络安全', link: '/cs/network/security' },
            { text: '网络性能', link: '/cs/network/performance' },
            { text: '网络应用', link: '/cs/network/application' },
            { text: '网络编程', link: '/cs/network/programming' },
            { text: '其他', link: '/cs/network/other' }
          ]
        }
      ],
      '/cs/database/': [
        {
          text: '数据库',
          items: [
            { text: '数据库概述', link: '/cs/database/overview' },
            { text: '关系型数据库', link: '/cs/database/relational' },
            { text: '非关系型数据库', link: '/cs/database/nosql' },
            { text: '数据库管理系统', link: '/cs/database/database-management-system' },
            { text: '数据库设计', link: '/cs/database/design' },
            { text: '数据库优化', link: '/cs/database/optimization' },
            { text: '数据库事务', link: '/cs/database/transaction' },
            { text: '数据库索引', link: '/cs/database/index' },
            { text: '数据库备份与恢复', link: '/cs/database/backup-and-recovery' },
            { text: '其他', link: '/cs/database/other' }
          ]
        }
      ],
      'cs/engineering/': [
        {
          text: '软件工程',
          items: [
            { text: '软件工程概述', link: '/cs/engineering/overview' },
            { text: '需求分析', link: '/cs/engineering/requirement-analysis' },
            { text: '软件设计', link: '/cs/engineering/software-design' },
            { text: '软件测试', link: '/cs/engineering/software-test' },
            { text: '软件维护', link: '/cs/engineering/software-maintenance' },
            { text: '软件配置管理', link: '/cs/engineering/software-configuration-management' },
            { text: '软件项目管理', link: '/cs/engineering/software-project-management' },
            { text: '其他', link: '/cs/engineering/other' }
          ]
        }
      ],
      '/java/basic/': [
        {
          text: 'Java基础',
          items: [
            { text: 'Java概述', link: '/java/basic/overview' },
            { text: 'Java语法', link: '/java/basic/syntax' },
            { text: 'Java面向对象编程', link: '/java/basic/object-oriented-programming' },
            { text: 'Java集合框架', link: '/java/basic/collection' },
            { text: 'Java异常处理', link: '/java/basic/exception' },
            { text: 'Java输入输出', link: '/java/basic/io' },
            { text: 'Java多线程', link: '/java/basic/thread' },
            { text: 'Java网络编程', link: '/java/basic/network' },
            { text: 'Java数据库编程', link: '/java/basic/database' },
            { text: '其他', link: '/java/basic/other' }
          ]
        }
      ],
      '/java/advanced/': [
        {
          text: 'Java高级',
          items: [
            { text: 'Java反射', link: '/java/advanced/reflection' },
            { text: 'Java泛型', link: '/java/advanced/generic' },
            { text: 'Java注解', link: '/java/advanced/annotation' },
            { text: 'Java序列化', link: '/java/advanced/serialization' },
            { text: 'Java设计模式', link: '/java/advanced/design-pattern' },
            { text: 'Java并发编程', link: '/java/advanced/concurrent' },
            { text: 'Java内存模型', link: '/java/advanced/memory-model' },
            { text: 'Java虚拟机', link: '/java/advanced/virtual-machine' },
            { text: 'Java安全', link: '/java/advanced/security' },
            { text: '其他', link: '/java/advanced/other' }
          ]
        }
      ],
      '/java/framework/': [
        {
          text: 'Java框架',
          items: [
            { text: 'Spring框架', link: '/java/framework/spring' },
            { text: 'Spring Boot框架', link: '/java/framework/spring-boot' },
            { text: 'Spring Cloud框架', link: '/java/framework/spring-cloud' },
            { text: 'Hibernate框架', link: '/java/framework/hibernate' },
            { text: 'MyBatis框架', link: '/java/framework/mybatis' },
            { text: 'Struts框架', link: '/java/framework/struts' },
            { text: '其他', link: '/java/framework/other' }
          ]
        }
      ],
      '/java/design/': [
        {
          text: '设计模式与架构',
          items: [
            {
              text: '设计模式', link: '/java/design-pattern/design-pattern'
              ,
              items: [
                { text: '单例模式', link: '/java/design-pattern/design-pattern/singleton' },
                { text: '工厂模式', link: '/java/design-pattern/design-pattern/factory' },
                { text: '观察者模式', link: '/java/design-pattern/design-pattern/observer' },
                { text: '装饰器模式', link: '/java/design-pattern/design-pattern/decorator' },
                { text: '适配器模式', link: '/java/design-pattern/design-pattern/adapter' },
                { text: '策略模式', link: '/java/design-pattern/design-pattern/strategy' },
                { text: '代理模式', link: '/java/design-pattern/design-pattern/proxy' },
                { text: '模板方法模式', link: '/java/design-pattern/design-pattern/template-method' },
                { text: '命令模式', link: '/java/design-pattern/design-pattern/command' },
                { text: '迭代器模式', link: '/java/design-pattern/design-pattern/iterator' },
                { text: '责任链模式', link: '/java/design-pattern/design-pattern/chain-of-responsibility' },
                { text: '状态模式', link: '/java/design-pattern/design-pattern/state' },
                { text: '备忘录模式', link: '/java/design-pattern/design-pattern/memento' },
                { text: '访问者模式', link: '/java/design-pattern/design-pattern/visitor' },
                { text: '中介者模式', link: '/java/design-pattern/design-pattern/mediator' },
                { text: '解释器模式', link: '/java/design-pattern/design-pattern/interpreter' },
                { text: '组合模式', link: '/java/design-pattern/design-pattern/composite' },
                { text: '桥接模式', link: '/java/design-pattern/design-pattern/bridge' },
                { text: '享元模式', link: '/java/design-pattern/design-pattern/flyweight' },
                { text: '代理模式', link: '/java/design-pattern/design-pattern/proxy' },
                { text: '外观模式', link: '/java/design-pattern/design-pattern/facade' },
                { text: '代理模式', link: '/java/design-pattern/design-pattern/proxy' },
                { text: '抽象工厂模式', link: '/java/design-pattern/design-pattern/abstract-factory' },
                { text: '建造者模式', link: '/java/design-pattern/design-pattern/builder' },
                { text: '原型模式', link: '/java/design-pattern/design-pattern/prototype' },
                { text: '代理模式', link: '/java/design-pattern/design-pattern/proxy' },
              ]
            },
            {
              text: '架构', link: '/java/design-pattern/architecture'
              ,
              items: [
                { text: '分层架构', link: '/java/design-pattern/architecture/layered-architecture' },
                { text: '微服务架构', link: '/java/design-pattern/architecture/microservices-architecture' },
                { text: '事件驱动架构', link: '/java/design-pattern/architecture/event-driven-architecture' },
                { text: '领域驱动设计', link: '/java/design-pattern/architecture/domain-driven-design' },
                { text: 'CQRS架构', link: '/java/design-pattern/architecture/cqrs-architecture' },
                { text: '六边形架构', link: '/java/design-pattern/architecture/hexagonal-architecture' },
                { text: '事件溯源', link: '/java/design-pattern/architecture/event-sourcing' },
                { text: 'API网关', link: '/java/design-pattern/architecture/api-gateway' },
                { text: '服务网格', link: '/java/design-pattern/architecture/service-mesh' },
                { text: '容器化', link: '/java/design-pattern/architecture/containerization' },
                { text: '微前端', link: '/java/design-pattern/architecture/micro-frontend' },
                { text: 'Serverless', link: '/java/design-pattern/architecture/serverless' },
                { text: '持续集成/持续部署', link: '/java/design-pattern/architecture/continuous-integration-continuous-deployment' },
                { text: '微服务治理', link: '/java/design-pattern/architecture/microservices-governance' },
                { text: '微服务监控', link: '/java/design-pattern/architecture/microservices-monitoring' },
                { text: '微服务安全', link: '/java/design-pattern/architecture/microservices-security' },
                { text: '微服务测试', link: '/java/design-pattern/architecture/microservices-testing' },
                { text: '微服务部署', link: '/java/design-pattern/architecture/microservices-deployment' },
                { text: '微服务运维', link: '/java/design-pattern/architecture/microservices-operations' },
                { text: '微服务容错', link: '/java/design-pattern/architecture/microservices-fault-tolerance' },
                { text: '微服务性能优化', link: '/java/design-pattern/architecture/microservices-performance-optimization' },
                { text: '微服务可观察性', link: '/java/design-pattern/architecture/microservices-observability' },
                { text: '微服务可扩展性', link: '/java/design-pattern/architecture/microservices-scalability' },
                { text: '微服务可维护性', link: '/java/design-pattern/architecture/microservices-maintainability' },
                { text: '微服务可重用性', link: '/java/design-pattern/architecture/microservices-reusability' },
                { text: '微服务可测试性', link: '/java/design-pattern/architecture/microservices-testability' },
                { text: '微服务可部署性', link: '/java/design-pattern/architecture/microservices-deployability' },
                { text: '微服务可管理性', link: '/java/design-pattern/architecture/microservices-manageability' },
                { text: '微服务可扩展性', link: '/java/design-pattern/architecture/microservices-scalability' },
                { text: '微服务可维护性', link: '/java/design-pattern/architecture/microservices-maintainability' },
                { text: '微服务可重用性', link: '/java/design-pattern/architecture/microservices-reusability' },
                { text: '微服务可测试性', link: '/java/design-pattern/architecture/microservices-testability' },
                { text: '微服务可部署性', link: '/java/design-pattern/architecture/microservices-deployability' },
              ]
            },
            { text: '其他', link: '/java/design-pattern/other' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
