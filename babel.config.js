module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ["@babel/env", {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11"
        },
        useBuiltIns: "usage",
        corejs: "core-js@3"
      }],
      "@babel/react"
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", {legacy: true}],
      ["@babel/plugin-proposal-class-properties", {loose: true}]
    ]
  }
}