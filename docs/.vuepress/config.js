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
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'BigLazybones/documents',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑文档',
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
      { text: "关于我", link: "/about/" }
    ],
    sidebar: "auto",
    lastUpdated: '上次更新',   //最后更新时间
    
  }
};
