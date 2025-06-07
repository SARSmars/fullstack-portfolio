"use client"
// This is a client component that wraps the entire app with context providers

import React from 'react'
import { ThemeProvider } from 'next-themes'

export const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute={'class'}>
      {/* enableSystem: true will use the system theme, attribute: class will add a class to the html element */}
      <div className='min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  )
}
