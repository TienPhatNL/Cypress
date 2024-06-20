describe('Date Time Checker Feature', () => {
  it('Check out-of-range date (month)', () => {
    cy.visit('http://localhost:3000'); // Navigate to the main page of your application

    // Fill in the year and out-of-range month fields
    cy.get('#year').type('2024');
    cy.get('#month').type('13');
    cy.get('#day').type('11');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verification step to confirm the out-of-range error message
    cy.contains('Input for Month is out of range!').should('be.visible');
  });
});
