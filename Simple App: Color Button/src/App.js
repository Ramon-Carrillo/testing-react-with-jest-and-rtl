import { useState } from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [color, setColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)

  const newColor =
    color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newColor)}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        disabled={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  )
}

export default App
