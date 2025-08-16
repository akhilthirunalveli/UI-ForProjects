import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import InputField from '../InputField'

test('renders label and placeholder', () => {
  render(<InputField label="Full name" placeholder="e.g. Riya Sharma" />)
  expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Riya Sharma/i)).toBeInTheDocument()
})

test('clear button clears value', () => {
  const { getByPlaceholderText, getByRole } = render(<InputField placeholder="Type" showClear />)
  const input = getByPlaceholderText(/Type/i) as HTMLInputElement
  fireEvent.change(input, { target: { value: 'hello' } })
  const btn = getByRole('button', { name: /clear/i })
  fireEvent.click(btn)
  expect(input.value).toBe('')
})
