// https://docs.cypress.io/api/introduction/api.html

describe('visit homepage', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Get all the news you are looking for...');
  });
});

describe('visit login page', () => {
  it('Visits the app login url', () => {
    cy.visit('/login');
    cy.contains('h1', 'Welcome back !');
  });
});

describe('visit signup page', () => {
  it('Visits the app register url', () => {
    cy.visit('/register');
    cy.contains(
      'h2',
      'Désolé, je sais pas quoi mettre donc ....Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatioest et minime accipienda cum in ceteris peccatis.'
    );
  });
});
