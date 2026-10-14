import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it } from '@jest/globals'
import App from './App'

describe('App', () => {
  it('increments the counter when clicked', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: 'Count is 0' }))

    expect(screen.getByRole('button', { name: 'Count is 1' })).toBeInTheDocument()
  })
})
