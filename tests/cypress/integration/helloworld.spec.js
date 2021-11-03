import { LOCAL_BASE_URL } from './test_settings'

describe('localhost:1313', () => {
  it('helloworld', () => {
    cy.visit(LOCAL_BASE_URL)
  })

  it('projects', () => {
    cy.visit(`${LOCAL_BASE_URL}/projects`)
  })
})
