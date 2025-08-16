import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DataTable, { DataTableProps, Column } from './DataTable'

interface Person {
  id: number
  name: string
  city: string
  email: string
  age: number
}

const columns: Column<Person>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'city', title: 'City', dataIndex: 'city' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
]

const sampleData: Person[] = [
  { id: 1, name: 'Riya Sharma', city: 'Mumbai', email: 'riya.sharma@example.in', age: 29 },
  { id: 2, name: 'Arjun Patel', city: 'Ahmedabad', email: 'arjun.patel@example.in', age: 34 },
  { id: 3, name: 'Sneha Reddy', city: 'Bengaluru', email: 'sneha.reddy@example.in', age: 26 },
]

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable as any,
}

export default meta

type Story = StoryObj<DataTableProps<Person>>

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
}

export const Sortable: Story = {
  args: {
    data: sampleData,
    columns,
  },
}

export const SelectableSingle: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    multiple: false,
  },
}

export const SelectableMultiple: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    multiple: true,
  },
}

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
}

export const EmptyState: Story = {
  args: {
    data: [],
    columns,
    emptyText: 'No users available',
  },
}
