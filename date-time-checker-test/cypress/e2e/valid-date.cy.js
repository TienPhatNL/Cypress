describe('Date Time Checker Feature', () => {
  it('Check date successfully with provided inputs', () => {
    cy.visit('http://localhost:3000'); // Navigate to the main page of your application

    // Fill in the year, month, and day fields
    cy.get('#year').type('2024');
    cy.get('#month').type('6');
    cy.get('#day').type('11');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verification step to confirm the valid date message
    cy.contains('Valid Date').should('be.visible');
  });
});
