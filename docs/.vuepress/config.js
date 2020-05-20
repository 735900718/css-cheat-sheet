module.exports = {
  title: 'CSS 样式小抄',
  description: '一些CSS样式积累备用',
  base: '/css-cheat-sheet/',
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    nav: [
      { text: 'vue小抄', link: 'http://735900718.github.io/vue-cheat-sheet'},
      { text: 'github', link: 'https://github.com/735900718/css-cheat-sheet' }
    ],
    sidebar: {
      '/': [
        {
          title: '工具',
          collapsable: false,
          children: [
            ['CreatePolygon', '正多边形生成器'],
            ['CreateTriangle', '三角形生成器']
          ]
        },
        {
          title: '样式',
          collapsable: false,
          children: [
            ['Timeline', '时间线'],
            ['Directory', '目录'],
            ['Header', 'header'],
            ['Dialog', '对话框'],
            ['Button', '按钮']
          ]
        },
        {
          title: '动画',
          collapsable: false,
          children: [
            ['Loading', '加载']
          ]
        },
        {
          title: '效果',
          collapsable: false,
          children: [
            ['Shuttle', '穿梭机']
          ]
        },
        {
          title: '其他工具',
          collapsable: false,
          children: [
            ['KeyCode', '按键码']
          ]
        },
      ]
    }
  }
}