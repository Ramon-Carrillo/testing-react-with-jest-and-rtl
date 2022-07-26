import { render, screen } from '../../../test-utils/testing-library'
import Options from '../Options'

test('displays image for each scoop from the server', async () => {
  render(<Options optionType='scoops' />)

  //* find the images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  //* confirm alt text of images
  const altText = scoopImages.map((element) => element.alt)
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('displays image for each topping option from the server', async () => {
  render(<Options optionType='toppings' />)

  //* find the images
  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })
  expect(toppingImages).toHaveLength(3)

  //* confirm alt text of images
  const altTextTopping = toppingImages.map((element) => element.alt)
  expect(altTextTopping).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ])
})
