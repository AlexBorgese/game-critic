import { render } from '@testing-library/react'
import Tile from './tile'

const PROPS = {
  name: 'Game',
  background_image: 'src/to/image',
  description_raw: 'text',
}

describe('Given the button is rendered', () => {
  it('should render the button value', () => {
    const { getByText } = render(<Tile {...PROPS} />)

    expect(getByText(PROPS.name)).toBeVisible()
  })

  it('should render the background image', () => {
    const { getByAltText } = render(<Tile {...PROPS} />)

    expect(getByAltText(PROPS.name)).toHaveAttribute(
      'src',
      PROPS.background_image
    )
  })

  it('should render the description', () => {
    const { getByText } = render(<Tile {...PROPS} />)

    expect(getByText(PROPS.description_raw)).toBeVisible()
  })
})
