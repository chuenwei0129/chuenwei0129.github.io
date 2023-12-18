import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    // 网站的标题。为您的站点生成 RSS 源时也会使用此功能。
    pageTitle: "<Chu's Blog />",
    // 是否在您的站点上启用 SPA 路由。
    enableSPA: true,
    // 是否在您的网站上启用 popover previews。
    enablePopovers: true,
    // 用于网站分析的内容
    analytics: null,
    baseUrl: "chuenwei0129.github.io",
    // Quartz 在 content 文件夹中查找文件时应忽略且不搜索的 glob 模式列表。
    ignorePatterns: ["private", "templates"],
    theme: {
      // 使用什么字体。Google Fonts 上提供的任何字体都可以在这里使用。
      typography: {
        // 用于标题的字体
        header: "Noto Serif",
        // 一切字体
        body: "Noto Serif",
        // 内联和块引号的字体。
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
    ],
  },
}

export default config
