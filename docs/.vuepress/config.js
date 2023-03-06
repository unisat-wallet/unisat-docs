module.exports = (_ctx) => ({
  sourceDir: "docs",
  dest: "docs/dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "Unisat Docs",
      description: "Developer documentation for the Unisat",
    },
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  theme: "@vuepress/theme-default",

  themeConfig: {
    repo: "",
    docsDir: "packages/docs/dist",
    editLinks: false,
    logo: "/logo.png",
    smoothScroll: true,
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: require("./nav/en"),
        sidebar: {
          "/guide/": getGuideSidebar(
            "Guide",
            "API Reference",
            "Best Practices",
            "Mobile",
            "Resources"
          ),
        },
      },
    },
  },

  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ["@vuepress/medium-zoom", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>",
      },
    ],
    [
      "container",
      {
        type: "upgrade",
        before: (info) => `<UpgradePath title="${info}">`,
        after: "</UpgradePath>",
      },
    ],
    [
      "vuepress-plugin-redirect",
      {
        redirectors: [
          {
            base: "/",
            alternative: "/guide/",
          },
        ],
      },
    ],
    [
      "tabs",
      {
        useUrlFragment: false,
      },
    ],
  ],

  extraWatchFiles: [".vuepress/nav/en.js"],
});

function getGuideSidebar(guide, api, bestPractices, mobile, resources) {
  return [
    {
      title: guide,
      collapsable: false,
      children: [
        "",
        "getting-started",
        // 'common-terms',
        // 'accessing-accounts',
        // 'sending-transactions',
      ],
    },
    {
      title: api,
      collapsable: false,
      children: ["unisat-api"],
    },
    // {
    //   title: bestPractices,
    //   collapsable: false,
    //   children: [
    //     'registering-your-token',
    //   ]
    // },
  ];
}
