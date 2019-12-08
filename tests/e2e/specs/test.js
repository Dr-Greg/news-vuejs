// https://docs.cypress.io/api/introduction/api.html

describe('visit homepage', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Get all the news you are looking for...');
  });
  it('Contains the footer title', () => {
    cy.visit('/');
    cy.get('footer').contains('strong', 'This app uses');
  });
  it('Contains the footer link', () => {
    cy.visit('/');
    cy.get('footer').contains('a', 'News API');
  });
});

describe('visit login page', () => {
  it('Visits the app login url', () => {
    cy.visit('/login');
    cy.contains('h1', 'Welcome back !');
  });
  it('Contains the footer title', () => {
    cy.visit('/login');
    cy.get('footer').contains('strong', 'This app uses');
  });
  it('Contains the footer link', () => {
    cy.visit('/login');
    cy.get('footer').contains('a', 'News API');
  });
});

describe('visit signup page', () => {
  it('Visits the app register url', () => {
    cy.visit('/register');
    cy.contains(
      'h2',
      'Create an account to better enjoy our services'
    );
  });
  it('Contains the footer title', () => {
    cy.visit('/register');
    cy.get('footer').contains('strong', 'This app uses');
  });
  it('Contains the footer link', () => {
    cy.visit('/register');
    cy.get('footer').contains('a', 'News API');
  });
});
