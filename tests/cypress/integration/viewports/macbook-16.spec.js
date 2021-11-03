import { LOCAL_PAGES_URLS, LOCAL_ZH_TW_PAGES_URLS } from '../test_settings'

describe('macbook-16', () => {
  it('Visits  by macbook-16', () => {
    cy.viewport('macbook-16')

    LOCAL_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-macbook-16-${u}`, 0.0)
    })
  })

  it('Visits zh-tw by macbook-16', () => {
    cy.viewport('macbook-16')

    LOCAL_ZH_TW_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-macbook-16-${u}`, 0.0)
    })
  })
})
