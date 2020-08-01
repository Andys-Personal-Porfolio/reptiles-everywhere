import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import Inventory from './Inventory';
import { MemoryRouter } from 'react-router-dom';
import fetchBooksMockData from '../App/fetchBooksMockData'


describe('Inventory', () => {

  const mockBookTitle = "All About the Reptiles of the World - Animal Books | Children's Animal Books"

  it('should render book titles', () => {
    const { getByRole } = render(<MemoryRouter><Inventory books={fetchBooksMockData.items} /></MemoryRouter>)
    const bookTitle = getByRole('heading', { name: "Smart Kids: Reptiles and Amphibians" })
    const bookTitle2 = getByRole('heading', { name: mockBookTitle })
    expect(bookTitle).toBeInTheDocument()
    expect(bookTitle2).toBeInTheDocument()
  })

  it('should render covers of books', () => {
    const { getByRole, getAllByRole } = render(<MemoryRouter><Inventory books={fetchBooksMockData.items} /></MemoryRouter>)
    const coverImg = getByRole('img', { name: "Smart Kids: Reptiles and Amphibians cover" })
    const covers = getAllByRole('img')

    expect(covers.length).toEqual(2)
    expect(coverImg).toBeInTheDocument()
  })

  it('should render start reading button', () => {
    const { getByRole } = render(<MemoryRouter><Inventory books={fetchBooksMockData.items} /></MemoryRouter>)
    const startReadingBtn = getByRole('button', { name: "Start Reading " + mockBookTitle })

    expect(startReadingBtn).toBeInTheDocument()
  })


})