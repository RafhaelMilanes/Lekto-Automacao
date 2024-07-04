const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

module.exports = defineConfig({
  projectId: "t36h84",
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      const envConfig = dotenv.config().parsed;

      console.log(envConfig); 
      config.env = {
        ...config.env,
        ...envConfig,
      };

      return config;
    },
    baseUrl: 'https://plataforma.stg.lekto.com.br/',
    testIsolation: false,
  },
});
