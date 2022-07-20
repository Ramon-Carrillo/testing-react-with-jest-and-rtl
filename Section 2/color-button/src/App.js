import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red')
  const [disabled, setDisabled] = useState(false)

  const newColor = color === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button
        style={{ backgroundColor: color, color: 'white' }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {newColor}
      </button>
      <input
        type='checkbox'
        id='enable-button-checkbox'
        disabled={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  )
}

export default App
