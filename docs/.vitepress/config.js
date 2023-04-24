/*
 * @Author: ‘Fzz’
 * @Date: 2023-04-21 15:58:05
 * @LastEditTime: 2023-04-21 16:04:51
 * @FilePath: \Myblog\docs\.vitepress\config.js
 * @Description: Do not edit
 */
export default {
  // base: "/blog/", //配置默认启动页地址
  themeConfig: {
    siteTitle: "Akm",
    logo: "/logo.png",
    smoothScroll: true,
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/button/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/FangAk" }],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/examples/button/",
            },
            {
              text: "Icon图标",
              link: "/examples/Icon/",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "ChatgptAl",
          items: [
            {
              text: "once",
              link: "/examples/Test/",
            },
          ],
        },
      ],
    }, // 右侧边栏标题
    outline: "deep",
    outlineTitle: "章节导航",

    // 上下篇文本提示文字
    docFooter: {
      prev: "←上一篇",
      next: "下一篇→",
    },

    // 上次更新时间提示文字
    lastUpdatedText: "上次更新时间",

    // 编辑链接
    // editLink: {
    //     text: '我的博客',
    //     pattern: 'https://www.csdn.net/'
    // },

    // 页面底部
    footer: {
      message: "",
      copyright: "Copyright © " + new Date().getFullYear() + " Akm",
    },
  },
};
