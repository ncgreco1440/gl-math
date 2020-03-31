module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: '80',
          chrome: '80',
          firefox: '70'
        }
      }
    ],
    "@babel/preset-typescript"
  ]
}
