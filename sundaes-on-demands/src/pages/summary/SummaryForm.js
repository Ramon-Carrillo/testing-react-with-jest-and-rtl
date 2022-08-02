import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SummaryForm = () => {
  const [checked, setChecked] = useState(false)

  const checkboxLabel = (
    <span>
      I agree to the{' '}
      <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  )
  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!checked}>
        {' '}
        Confirm Order{' '}
      </Button>
    </Form>
  )
}

export default SummaryForm
