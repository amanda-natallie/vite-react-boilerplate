import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
// TODO: Figure out how to work with the tsconfig paths in tests
import App from '../../app.tsx'

test('Renders the main page', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
