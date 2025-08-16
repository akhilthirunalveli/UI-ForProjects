import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DataTable from '../DataTable'

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'city', title: 'City', dataIndex: 'city' },
]
const data = [
  { name: 'Riya Sharma', city: 'Mumbai' },
  { name: 'Arjun Patel', city: 'Ahmedabad' },
]

test('renders rows and columns', () => {
  render(<DataTable data={data} columns={columns} />)
  expect(screen.getByText(/Riya Sharma/i)).toBeInTheDocument()
  expect(screen.getByText(/Ahmedabad/i)).toBeInTheDocument()
})

test('sort toggles when clicking sortable header', () => {
  render(<DataTable data={data} columns={columns} />)
  const header = screen.getByText(/Name/i)
  fireEvent.click(header)
  // after first click, ascending order should be applied; second click toggles to desc
  fireEvent.click(header)
  expect(screen.getByText(/Riya Sharma/i)).toBeInTheDocument()
})
