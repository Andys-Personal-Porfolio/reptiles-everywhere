import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


describe('Header', () => {

  it('should render title of website', () => {
    const { getByRole } = render(<MemoryRouter><Header /></MemoryRouter>)
    const title = getByRole('heading', { title: "Reptiles Everywhere!" })

    expect(title).toBeInTheDocument()
  })
  
  it('should render radio buttons of categories', () => {
    const { getByRole } = render(<MemoryRouter><Header /></MemoryRouter>)
    const categoryBtn1 = getByRole('button', { name: 'crocodiles' })
    const categoryBtn2 = getByRole('button', { name: 'turtles' })
    const categoryBtn3 = getByRole('button', { name: 'snakes' })

    expect(categoryBtn1).toBeInTheDocument()
    expect(categoryBtn2).toBeInTheDocument()
    expect(categoryBtn3).toBeInTheDocument()
  })

})