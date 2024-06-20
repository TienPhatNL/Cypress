describe('Date Time Checker Feature', () => {
  it('Fail: Check valid date but expect invalid message', () => {
    cy.visit('http://localhost:3000'); // Navigate to the main page of your application

    // Fill in the year, month, and day fields
    cy.get('#year').type('2024');
    cy.get('#month').type('6');
    cy.get('#day').type('11');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Intentionally wait for incorrect message
    cy.contains('Invalid Date').should('be.visible'); 
  });
});
