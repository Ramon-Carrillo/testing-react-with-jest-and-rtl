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

test('initial conditions', () => {
  render(<App />)
  //* check the button starts out enabled *//
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()

  //* check that the checkbox is unchecked *//
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

//* First Code Challenge *//
test('When checkbox is checked,button should be disabled', () => {
  render(<App />)
  //* check the checkbox is enabled *//
  const checkbox = screen.getByRole('checkbox')
  const button = screen.getByRole('button')

  //* check that the checkbox is disabled *//
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  //* check that the checkbox is enabled *//
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})
