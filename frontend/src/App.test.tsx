import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('shows the initial counter value', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Count is 0' })).toBeInTheDocument()
  })

  it('increments the counter when clicked', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: 'Count is 0' }))

    expect(screen.getByRole('button', { name: 'Count is 1' })).toBeInTheDocument()
  })
})
