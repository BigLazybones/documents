module.exports = {
  title: "lazywu",
  description: "lazywu的文档",
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
    lastUpdated: 'Last Updated',   //最后更新时间
  }
};
