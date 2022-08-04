import { render } from '@testing-library/react'
import { OrderDetailsProvider } from '../context/OrderDetails'

const rederWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options })

export * from '@testing-library/react'

export { rederWithContext as render }
