module.exports = {
  title: 'CSS 样式小抄',
  description: '一些CSS样式积累备用',
  themeConfig: {
    nav: [
      { text: 'github', link: 'https://github.com/735900718/css-cheat-sheet' },
    ],
    sidebar: {
      '/': [
        {
          title: '动画',
          collapsable: false,
          children: [
            ['/Loading/', 'loading']
          ]
        },
        {
          title: '效果',
          collapsable: false,
          children: [
            ['Shuttle', '穿梭机']
          ]
        }
      ]
    }
  }
}