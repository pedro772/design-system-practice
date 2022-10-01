module.exports = {
  "stories": ["../src/**/*.stories.(js|mdx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-docs"
  ],
  core: {
    builder: "webpack5"
  },
}