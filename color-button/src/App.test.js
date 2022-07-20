import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  //* can use regex to match the text or a string *//
  const linkElement = screen.getByText(/learn react/i)
  //* Jest global, starts the assertion *//
  //* expect argument subject of the assertion *//
  //* matcher type of assertion this matcher comes from Jest-DOM*//
  expect(linkElement).toBeInTheDocument()
})

//* TDD - Test Driven Development *//
//* Write tests first, then write code *//
