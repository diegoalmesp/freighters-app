describe("Seach Form and Freighters List Test", () => {
  it("Should change the amount of agents listed when selecting `Transport Mode`", () => {
    cy.visit("http://localhost:3000/");
    // there's 13 div elements counting the message
    cy.contains('Currently displaying 12 results').should('exist');
    cy.get('#freighters_list').find('>div').should('have.length', 12);

    // select the first radio
    cy.contains('Transport Mode').parent().find('input').first().check();
    // now the Freighters list gets shorter
    cy.get('#freighters_list').find('>div').should('have.length', 5);
    cy.contains('Currently displaying 5 results').should('exist');

    // select the last radio
    cy.contains('Transport Mode').parent().find('input').last().check();
    cy.get('#freighters_list').find('>div').should('have.length', 4);
    cy.contains('Currently displaying 4 results').should('exist');

    // reset fields
    cy.contains('Reset Fields').click();
    cy.get('#freighters_list').find('>div').should('have.length', 4);
    cy.contains('Currently displaying 4 results').should('exist');
  });

  it("Should change the amount of agents listed when selecting an Origin Region", () => {
    cy.visit("http://localhost:3000/");
    // there's 13 div elements counting the message
    cy.contains('Currently displaying 12 results').should('exist');
    cy.get('#freighters_list').find('>div').should('have.length', 12);

    // select country and region
    cy.get('select[name="country_orig"]').select('Argentina');
    cy.get('select[name="base"]').select('Buenos Aires');
    // list goes to 11
    cy.contains('Currently displaying 11 results').should('exist');
    cy.get('#freighters_list').find('>div').should('have.length', 11);
  })

  it("Should change the amount of agents listed when selecting a Destination Region", () => {
    cy.visit("http://localhost:3000/");
    // there's 13 div elements counting the message
    cy.contains('Currently displaying 12 results').should('exist');
    cy.get('#freighters_list').find('>div').should('have.length', 12);

    // select country and region
    cy.get('select[name="country_dest"]').select('France');
    cy.get('select[name="destinations"]').select('Normandie');
    // list goes to 11
    cy.contains('Currently displaying 1 result').should('exist');
    cy.get('#freighters_list').find('>div').should('have.length', 1);
  })

  it("Should change the amount of agents listed when selecting a CBM", () => {
    cy.visit("http://localhost:3000/");
    // there's 13 div elements counting the message
    cy.contains('Currently displaying 12 results').should('exist');
    cy.get('#freighters_list').find('>div').should('have.length', 12);

    // select country and region
    cy.get('select[name="cbm"]').select('100');
    // list goes to 11
    cy.contains('Currently displaying 3 results').should('exist');
    cy.get('#freighters_list').find('>div').should('have.length', 3);
  })
});
