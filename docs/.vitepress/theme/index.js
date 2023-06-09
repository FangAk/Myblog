/*
 * @Author: ‘Fzz’
 * @Date: 2023-04-21 15:26:19
 * @LastEditTime: 2023-04-21 17:04:00
 * @FilePath: \Myblog\docs\.vitepress\theme\index.js
 * @Description: Do not edit
 */
// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
// import "element-plus/dist/index.css";
// 主题样式
// import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import "./styles/index.css";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    // import("element-plus").then((module) => {
    //   app.use(module);
    // });
  },
};
