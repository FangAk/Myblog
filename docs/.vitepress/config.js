/*
 * @Author: ‘Fzz’
 * @Date: 2023-04-21 15:58:05
 * @LastEditTime: 2023-04-21 16:04:51
 * @FilePath: \Myblog\docs\.vitepress\config.js
 * @Description: Do not edit
 */
export default {
  themeConfig: {
    siteTitle: "Akm",
    logo: "/logo.png",
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
    },
  },
};
