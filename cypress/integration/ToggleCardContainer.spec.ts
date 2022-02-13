describe('Test toggle and Show/Hide Feature', () => {
	it('Go to page', () => {
		cy.visit('http://localhost:3000/');
	});

	it('Checks if on page', () => {
		cy.get('[data-testid=header-wrapper]')
			.first()
			.invoke('text')
			.should('equal', 'General');
	});

	it('Check if users toggle is not checked', () => {
		cy.get('[id="users"]').should('not.be.checked');
	});

	it('Selects users toggle, checks if its checked', () => {
		cy.get('[for="users"]')
			.click()
			.get('[id="users"]')
			.should('be.checked');
	});

	it('Selects arrow toggle', () => {
		cy.get('[id="ArrowToggleId"]').click();
	});

	it('Checks if additional options displayed', () => {
		cy.get('[for="usersAdd"]').should('be.visible');
	});

	it('Selects users add toggle, checks its not checked', () => {
		cy.get('[for="usersAdd"]')
			.click()
			.get('[id="usersAdd"]')
			.should('not.be.checked');
	});

	it('Selects users toggle, checks if its not checked', () => {
		cy.get('[for="users"]')
			.click()
			.get('[id="users"]')
			.should('not.be.checked');
	});

	it('Checks if additional options hidden', () => {
		cy.get('[for="usersAdd"]').should('not.exist');
	});
});
