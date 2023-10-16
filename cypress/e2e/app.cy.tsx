describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('increments count on button click', () => {
    cy.get('button').contains('count is 0').click()
    cy.get('button').should('contain', 'count is 1')
  })
})
