const { defineConfig } = require("cypress");

module.exports = defineConfig({
	experimentalModifyObstructiveThirdPartyCode: true,
	e2e: {
		baseUrl: "https://secure-ui-qa.mydirectives.com/Login",
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
