const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // setup plugins
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack", // Or Vite if using Vite
    },
    supportFile: "cypress/support/component.ts",
  },
});
