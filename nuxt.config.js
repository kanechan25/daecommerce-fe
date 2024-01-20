const pkg = require("./package")
const path = require("path")

module.exports = {
  target: "static",

  router: {
    base: "/"
  },
  redirect: [
    {
      from: "/product",
      to: "/"
    }
  ],

  // Headers of the page

  head: {
    title: pkg.description,
    meta: [],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/da-favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        integrity: "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
        crossorigin: "anonymous",
        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      }
    ]
  },

  // Customize the progress-bar color
  loading: { color: "#fff" },

  // Global CSS
  css: ["@/assets/css/main.css"],

  // Plugins to load before mounting the App
  plugins: [],

  // Nuxt.js modules
  modules: ["@nuxt/postcss8", "nuxt-purgecss"],
  // Axios module configuration

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    dir: "docs"
  },

  purgeCSS: {
    mode: "postcss",
    enabled: process.env.NODE_ENV === "production"
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js")
      }
    }
  }
}
