module.exports = {
  title: "lazywu",
  description: "lazywu的文档",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "前端",
        items: [
          { text: "JavaScript", link: "/javascript/" },
          { text: "CSS", link: "/css/" },
          { text: "Vue", link: "/vue/" }
        ]
      },
      {
        text: "工具",
        items: [
          { text: "VSCode", link: "/vscode/" },
          { text: "Chrome Developer Tools", link: "/developer/" },
          { text: "Git", link: "/git/" }
        ]
      },
      { text: "关于我", link: "/about/" },
      {
        text: "GitHub",
        link: "https://github.com/BigLazybones",
        target: "_blank"
      }
    ],
    sidebar: "auto",
    lastUpdated: '上次更新',   //最后更新时间
    
  }
};
