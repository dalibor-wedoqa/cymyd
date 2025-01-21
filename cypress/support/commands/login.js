//Login
Cypress.Commands.add("login", (fixtureFileName = "defaultUser") => {
	// Visit the login page
	cy.visit("https://secure-ui-qa.mydirectives.com");

	// Load credentials from the specified fixture file
	cy.fixture(fixtureFileName).then((user) => {
		// Fill in the login form
		cy.get("#login-username", { timeout: 20000 }).put(user.username);
		cy.get("#login-pwd").put(user.password);

		// Submit the login form
		cy.get("#login-submit").click();
	});
});

// Continue with user session
Cypress.Commands.add("initSession", (fixtureFileName = "defaultUser") => {
	cy.fixture(fixtureFileName).then((user) => {
		cy.session(
			user.username, // Use the username from the fixture file as the session name
			() => {
				cy.login(fixtureFileName); // Pass the fixture file name to the login command

				// Ensure the "MyD.Secure.Auth" cookie is set using Cypress retry mechanism
				cy.getCookie("MyD.Secure.Auth").should((cookie) => {
					expect(cookie).to.exist; // Assert that the cookie exists
				});
			},
			{
				cacheAcrossSpecs: true,

				validate: () => {
					// Validate session by ensuring the cookie exists
					cy.getCookie("MyD.Secure.Auth").should("exist");
				},
			}
		);
	});

	// Navigate to the Dashboard page
	cy.visit("https://secure-ui-qa.mydirectives.com/Dashboard");
	cy.get("button.v-app-bar-nav-icon").should("be.visible");
});
