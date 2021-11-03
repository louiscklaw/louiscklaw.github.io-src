import { LOCAL_PAGES_URLS, LOCAL_ZH_TW_PAGES_URLS } from '../test_settings'

describe('macbook-13', () => {
  it('Visits  by macbook-13', () => {
    cy.viewport('macbook-13')

    LOCAL_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-macbook-13-${u}`, 0.0)
    })
  })

  it('Visits zh-tw by macbook-13', () => {
    cy.viewport('macbook-13')

    LOCAL_ZH_TW_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-macbook-13-${u}`, 0.0)
    })
  })
})
