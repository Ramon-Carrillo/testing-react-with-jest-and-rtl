import { render, screen, fireEvent } from '@testing-library/react'
import { text } from 'node:stream/consumers'
import App from './App'

test('button has correct initial color', () => {
  render(<App />)
  //* find an element with a role of button and text 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  //* expect the background color to be red *//
  expect(colorButton).toHaveStyle('background-color: red')

  //* click the button *//
  fireEvent.click(colorButton)

  //* expect the background color to be blue *//
  expect(colorButton).toHaveStyle('background-color: blue')

  //* expect the button text to be 'Change to red' *//
  expect(colorButton.textContent).toBe('Change to red')
})
