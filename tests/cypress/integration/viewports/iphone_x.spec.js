import { LOCAL_PAGES_URLS, LOCAL_ZH_TW_PAGES_URLS } from '../test_settings'

describe('iphone-x', () => {
  it('Visits  by iphone-x', () => {
    cy.viewport('iphone-x')

    LOCAL_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-iphone-x-${u}`, 0.0)
    })
  })

  it('Visits zh-tw by iphone-x', () => {
    cy.viewport('iphone-x')

    LOCAL_ZH_TW_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-iphone-x-${u}`, 0.0)
    })
  })
})
