import { gitLoginPage } from "../pageObjects/githubLoginPage"
import GitLoginPageClass from "../pageObjects/githubLoginPage"


// Create an instance of the GitLoginPageClass class
const gitLogin = new GitLoginPageClass()

describe('GitHub Login Functionality', () => {
  let data: any
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
    gitLogin.clickAndVerifyHeaderLink('Pricing', data.pricingMsg)            
  })
  it('Navigation "Enterprise -> Enterprise platform" link redirect to the correct page', () => {        
    gitLoginPage.githubLoginHeaderMenuButton('Enterprise').click()
    gitLogin.clickAndVerifyHeaderLink('Enterprise platform', data.enterprisePlatformMsg)       
  })
  it('Navigation "Enterprise -> Advanced Security" link redirect to the correct page', () => {        
    gitLoginPage.githubLoginHeaderMenuButton('Enterprise').click()
    gitLogin.clickAndVerifyHeaderLink('Advanced Security', data.enterpriseAdvancedSecurityMsg)       
  })
  it('Navigation "Open Source -> GitHub Sponsors" link redirect to the correct page', () => {        
    gitLoginPage.githubLoginHeaderMenuButton('Open Source').click()
    gitLogin.clickAndVerifyHeaderLink('GitHub Sponsors', data.openSourceSponsorsMsg)  
  })

})
  
//Open Source
