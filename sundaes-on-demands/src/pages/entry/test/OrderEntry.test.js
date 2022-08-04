import { render, screen, waitFor } from '../../../test-utils/testing-library'
import { rest } from 'msw'
import { server, Server } from '../../../mocks/server'
import OrderEntry from '../OrderEntry'

const url = 'http://localhost:3030'

test('handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get(`${url}/scoops`, (req, res, ctx) => res(ctx.status(500))),
    rest.get(`${url}/toppings`, (req, res, ctx) => res(ctx.status(500))),
  )
  render(<OrderEntry />)

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert')
    expect(alerts).toHaveLength(2)
  })
})
