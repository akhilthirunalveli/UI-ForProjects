import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">UI For Projects - Demo</h1>
      <p className="mt-4 text-sm text-gray-600">Run Storybook for component examples.</p>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
