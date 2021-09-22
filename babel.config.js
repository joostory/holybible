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
        useBuiltIns: "entry",
        corejs: 3,
        modules: false
      }],
      "@babel/react"
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", {legacy: true}],
      ["@babel/plugin-proposal-class-properties", {loose: true}],
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
    ]
  }
}
