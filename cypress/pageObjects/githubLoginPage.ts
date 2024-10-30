
export const gitLoginPage = {

    githubLogo: () => cy.get('[class="octicon octicon-mark-github"]'),
    githubSignupLink: () => cy.get('[data-analytics-event*="sign_up"]').first(),
    githubLoginHeaderMenuLink: (linkName: string) => cy.contains('.HeaderMenu-nav li', linkName).find('a'),

}