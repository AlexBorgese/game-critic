import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

const PROPS = {
  onClick: jest.fn(),
  value: 'Button Value',
}

describe('Given the button is rendered', () => {
  it('should render the button value', () => {
    const { getByText } = render(<Button {...PROPS} />)

    expect(getByText(PROPS.value)).toBeVisible()
  })

  describe('when the button is clicked', () => {
    it('should call the onClick function', () => {
      const { getByText } = render(<Button {...PROPS} />)

      fireEvent.click(getByText(PROPS.value))

      expect(PROPS.onClick).toBeCalled()
    })
  })
})
