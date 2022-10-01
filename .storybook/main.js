module.exports = {
  "stories": ["../src/**/*.stories.(js|mdx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-contexts/regiser",
    "@storybook/addon-backgrounds/regiser",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
}