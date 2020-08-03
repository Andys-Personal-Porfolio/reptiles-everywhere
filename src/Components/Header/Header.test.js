import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


describe('Header', () => {

  it('should render title of website', () => {
    const { getByRole } = render(<MemoryRouter><Header /></MemoryRouter>)
    const title = getByRole('heading', { title: "Reptiles Everywhere!" })

    expect(title).toBeInTheDocument()
  })
  
  it('should render navLink buttons of categories', () => {
    const { getByRole } = render(<MemoryRouter><Header /></MemoryRouter>)
    const categoryBtn1 = getByRole('button', { name: 'crocodiles' })
    const categoryBtn2 = getByRole('button', { name: 'turtles' })
    const categoryBtn3 = getByRole('button', { name: 'snakes' })

    expect(categoryBtn1).toBeInTheDocument()
    expect(categoryBtn2).toBeInTheDocument()
    expect(categoryBtn3).toBeInTheDocument()
  })

  it('should render animal images of categories', () => {
    const { getByRole } = render(<MemoryRouter><Header /></MemoryRouter>)
    const image1 = getByRole('img', { name: 'crocodiles' })
    const image2 = getByRole('img', { name: 'turtles' })
    const image3 = getByRole('img', { name: 'snakes' })

    expect(image1).toBeInTheDocument()
    expect(image2).toBeInTheDocument()
    expect(image3).toBeInTheDocument()
  })

  it('should run searchBooks on click of Navlink if category is CoverView', () => {
    let getSingleBooks = jest.fn()
    let searchBooks = jest.fn()
    const { getByRole } = render(<MemoryRouter>
      <Header 
      category="CoverView" 
      getSingleBooks={getSingleBooks} 
      searchBooks={searchBooks}
      /></MemoryRouter>)

    const categoryBtn1 = getByRole('button', { name: 'crocodiles' })
    fireEvent.click(categoryBtn1)
    expect(searchBooks).toBeCalledTimes(1)
  })

  it('should run getSingleBooks on click of Navlink if category is SummaryView', () => {
    let getSingleBooks = jest.fn()
    let searchBooks = jest.fn()
    const { getByRole } = render(<MemoryRouter>
      <Header 
      category="SummaryView" 
      getSingleBooks={getSingleBooks} 
      searchBooks={searchBooks}
      /></MemoryRouter>)

    const categoryBtn1 = getByRole('button', { name: 'crocodiles' })
    fireEvent.click(categoryBtn1)
    expect(searchBooks).toBeCalledTimes(1)
  })

  it('should run no functions if category is not SummaryView or CoverView', () => {
    let getSingleBooks = jest.fn()
    let searchBooks = jest.fn()
    const { getByRole } = render(<MemoryRouter>
      <Header 
      category="couldBeAnything" 
      getSingleBooks={getSingleBooks} 
      searchBooks={searchBooks}
      /></MemoryRouter>)

    const categoryBtn1 = getByRole('button', { name: 'crocodiles' })
    fireEvent.click(categoryBtn1)
    expect(searchBooks).toBeCalledTimes(1)
  })

})