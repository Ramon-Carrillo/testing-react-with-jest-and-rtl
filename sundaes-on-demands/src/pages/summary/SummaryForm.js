import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const SummaryForm = () => {
  const [checked, setChecked] = useState(false)

  const popover = (
    <Popover id='termsandconditions-popover' placement='right'>
      <span> No ice cream will actually be delivered</span>
    </Popover>
  )
  const checkboxLabel = (
    <span>
      I agree to the
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
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
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm
