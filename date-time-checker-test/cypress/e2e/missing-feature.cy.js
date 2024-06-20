describe('Date Time Checker Feature', () => {
  it('Fail: Missing feature - Check for Help button', () => {
    cy.visit('http://localhost:3000'); // Navigate to the main page of your application

    // Attempt to find a "Help" button which does not exist
    cy.get('button.help-button').should('be.visible');
  });
});
