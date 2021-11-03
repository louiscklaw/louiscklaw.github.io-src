import { LOCAL_PAGES_URLS, LOCAL_ZH_TW_PAGES_URLS } from '../test_settings'

describe('ipad-mini', () => {
  it('Visits  by ipad-mini', () => {
    cy.viewport('ipad-mini')

    LOCAL_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-ipad-mini-${u}`, 0.0)
    })
  })

  it('Visits zh-tw by ipad-mini', () => {
    cy.viewport('ipad-mini')

    LOCAL_ZH_TW_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-ipad-mini-${u}`, 0.0)
    })
  })
})
