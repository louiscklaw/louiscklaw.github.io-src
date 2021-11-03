import { LOCAL_BASE_URL } from './test_settings'

describe('localhost:1313', () => {
  it('helloworld', () => {
    cy.visit(LOCAL_BASE_URL)
    cy.compareSnapshot(`helloworld`, 0.0)
  })

  it('projects', () => {
    cy.visit(`${LOCAL_BASE_URL}/projects`)
    cy.compareSnapshot(`helloworld projects`, 0.0)
  })
})
