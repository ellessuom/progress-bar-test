import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ShowProgress, { parsePosition, parseTitle } from './ShowProgress'


// Test for parsePosition function
describe('parsePosition', () => {
  it('converts position correctly', () => {
    expect(parsePosition(0)).toBe('0.00')
    expect(parsePosition(0.5)).toBe('50.00')
    expect(parsePosition(1)).toBe('100.00')
  })
})

// Test for parseTitle function
describe('parseTitle', () => {
  it('returns correct title based on position', () => {
    expect(parseTitle(1)).toBe('finished!')
    expect(parseTitle(0.75)).toBe('75.00%')
  })
})

// Tests for ShowProgress component
describe('ShowProgress component', () => {
  it('renders correctly with given props', () => {
    const routeName = 'Route 66'
    const myPosition = 0.5
    const peopleOnRoute = [
      { name: 'John', position: 0.2 },
      { name: 'Jane', position: 0.8 }
    ]

    render(<ShowProgress routeName={routeName} myPosition={myPosition} peopleOnRoute={peopleOnRoute} />)

    expect(screen.getByText('Route 66, 50.00%')).toBeInTheDocument()
    expect(screen.getByText('You')).toBeInTheDocument()
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('Jane')).toBeInTheDocument()

    // Checking for dynamic style application
    const youLabel = screen.getByText('You').closest('li')
    expect(youLabel).toHaveStyle(`left: clamp(0px, 50.00%, calc(50.00% - 60px))`)
    expect(youLabel).toHaveStyle(`zIndex: 10`)

    const otherLabels = peopleOnRoute.map(person => screen.getByText(person.name).closest('li'))
    otherLabels.forEach((label, i) => {
      expect(label).toHaveStyle(`zIndex: ${i + 1}`)
    })
  })
})
