import { LOCAL_PAGES_URLS, LOCAL_ZH_TW_PAGES_URLS } from '../test_settings'

describe('ipad-2', () => {
  it('Visits  by ipad-2', () => {
    cy.viewport('ipad-2')

    LOCAL_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-ipad-2-${u}`, 0.0)
    })
  })

  it('Visits zh-tw by ipad-2', () => {
    cy.viewport('ipad-2')

    LOCAL_ZH_TW_PAGES_URLS.forEach((u) => {
      cy.visit(u)
      cy.compareSnapshot(`homepage-ipad-2-${u}`, 0.0)
    })
  })
})
