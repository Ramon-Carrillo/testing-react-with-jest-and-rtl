import { useState } from 'react'

function App() {
  const [color, setColor] = useState('red')
  const [disabled, setDisabled] = useState(false)

  const newColor = color === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {newColor}
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
