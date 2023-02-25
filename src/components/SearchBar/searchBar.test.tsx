import { render, fireEvent } from '@testing-library/react'
import SearchBar from './searchBar'

const PROPS = {
  onEnter: jest.fn(),
}

describe('Given text is entered into the search bar', () => {
  it('should call the onEnter method and pass the text', () => {
    const { getByPlaceholderText } = render(<SearchBar {...PROPS} />)

    fireEvent.change(getByPlaceholderText('Search Here!'), {
      target: { value: 'portal' },
    })
    fireEvent.keyDown(getByPlaceholderText('Search Here!'), {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })

    expect(PROPS.onEnter).toBeCalledWith('portal')
  })
})
