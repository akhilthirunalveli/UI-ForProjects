import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import InputField, { InputFieldProps } from './InputField'

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<InputFieldProps>

export const Default: Story = {
  args: {
  label: 'Full name',
  placeholder: 'e.g. Riya Sharma',
  helperText: "Use the name on your official documents",
  },
}

export const Variants: Story = {
  render: () => (
  <div className="space-y-6 p-6 bg-[var(--bg)]">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Variants</h3>
        <div className="space-y-4">
      <InputField label="Full name" placeholder="e.g. Arjun Patel" variant="filled" />
      <InputField label="Mobile number" placeholder="e.g. 98765 43210" variant="outlined" />
      <InputField label="City" placeholder="e.g. Bengaluru" variant="ghost" />
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Sizes</h3>
        <div className="space-y-4">
          <InputField label="Small" placeholder="Small size" size="sm" />
          <InputField label="Medium" placeholder="Medium size" size="md" />
          <InputField label="Large" placeholder="Large size" size="lg" />
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
  <div className="space-y-6 p-6 bg-[var(--bg)]">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input States</h3>
        <div className="space-y-4">
      <InputField label="Mobile" placeholder="e.g. 98765 43210" helperText="We will send an OTP to verify" />
      <InputField label="Disabled" placeholder="Can't type here" disabled />
      <InputField label="PIN / ZIP" placeholder="Enter PIN" invalid errorMessage="Invalid PIN" />
      <InputField label="Loading" placeholder="Loading..." helperText="loading" />
      <InputField label="Email" placeholder="name@example.in" errorMessage="Please enter a valid email address" />
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-[var(--bg)]">
      <div>
        <h3 className="text-lg font-semibold mb-4">Interactive Features</h3>
        <div className="space-y-4">
          <InputField 
            label="Mobile (clearable)" 
            placeholder="e.g. 98765 43210" 
            showClear 
            helperText="Clear the number to enter a new mobile"
          />
          <InputField 
            label="Account password" 
            placeholder="Enter your password" 
            type="password" 
            showPasswordToggle 
            helperText="Use a strong password with letters & numbers"
          />
          <InputField 
            label="Password with clear" 
            placeholder="Password with clear" 
            type="password" 
            showClear 
            showPasswordToggle 
            helperText="Clear or toggle visibility as needed"
          />
        </div>
      </div>
    </div>
  ),
}

export const DarkTheme: Story = {
  render: () => (
    <div className="dark bg-[var(--bg)] min-h-screen p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Dark Theme Variants</h3>
          <div className="space-y-4">
            <InputField label="Filled Dark" placeholder="Filled in dark mode" variant="filled" />
            <InputField label="Outlined Dark" placeholder="Outlined in dark mode" variant="outlined" />
            <InputField label="Ghost Dark" placeholder="Ghost in dark mode" variant="ghost" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Dark Theme States</h3>
          <div className="space-y-4">
            <InputField label="Normal" placeholder="Normal state" helperText="Helper text in dark mode" />
            <InputField label="Invalid" placeholder="Invalid input" invalid errorMessage="Error message in dark mode" />
            <InputField 
              label="Interactive" 
              placeholder="Password with features" 
              type="password" 
              showClear 
              showPasswordToggle 
              helperText="All features work in dark mode"
            />
          </div>
        </div>
      </div>
    </div>
  ),
}
