import { gitLoginPage } from "../pageObjects/githubLoginPage"

describe('GitHub Login Functionality', () => {
  let data
  before(() => {
    // runs once before all tests in the block
    cy.fixture('testData').then(function (testdata) {
      data = testdata
    })
  })
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })
  it('The GitHub logo is visible.', () => {      
    gitLoginPage.githubLogo().should('be.visible')    
  })
  it('The "Sign up" button is functional.', () => {          
    gitLoginPage.githubSignupLink().should('be.visible')
    gitLoginPage.githubSignupLink().invoke('attr', 'href').then((href) => {
      gitLoginPage.githubSignupLink().click()
      cy.url().should('include', href);
      expect(cy.get('h1').contains(data.welcomeMsg))
    })
  })
  it('Navigation "Pricing" link redirect to the correct page', () => {        
    gitLoginPage.githubLoginHeaderMenuLink('Pricing').should('be.visible')
    gitLoginPage.githubLoginHeaderMenuLink('Pricing').invoke('attr', 'href').then((href) => {
      gitLoginPage.githubLoginHeaderMenuLink('Pricing').click()
      cy.url().should('include', href);
      expect(cy.get('h1').contains(data.pricingMsg))
    })        
  })
})
  