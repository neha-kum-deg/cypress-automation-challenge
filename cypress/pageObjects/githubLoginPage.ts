
export const gitLoginPage = {

    githubLogo: () => cy.get('[class="octicon octicon-mark-github"]'),
    githubSignupLink: () => cy.get('[data-analytics-event*="sign_up"]').first(),
    githubLoginHeaderMenuButton: (buttonName: string) => cy.contains('.HeaderMenu-nav li button', buttonName),
    githubLoginHeaderMenuLink: (linkName: string) => cy.contains('.HeaderMenu-nav li a', linkName),
    
}

class GitLoginPageClass {
    // Function to click a header menu link and verify URL and page header
    clickAndVerifyHeaderLink(menuText, expectedMsg) {
        gitLoginPage.githubLoginHeaderMenuLink(menuText).should('be.visible')
        gitLoginPage.githubLoginHeaderMenuLink(menuText).invoke('attr', 'href').then((href) => {
            gitLoginPage.githubLoginHeaderMenuLink(menuText).click()
            cy.url().should('include', href);
            expect(cy.get('h1').contains(expectedMsg))
        }) 
    }
}
  
export default GitLoginPageClass