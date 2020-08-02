import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import Inventory from './Inventory';
import { MemoryRouter } from 'react-router-dom';
import {reptileBooksMockData} from '../App/fetchBooksMockData'


describe('Inventory', () => {
  global.window = Object.create(window);
  const url = "http://localhost:3000/reptiles/SummaryView";
  Object.defineProperty(window, 'location', {
    value: {
      href: url
    }
  })
  
  const mockBookTitle = "All About the Reptiles of the World - Animal Books | Children's Animal Books"
  let inventory;
  beforeEach(() => {
    inventory = render(
    <MemoryRouter>
      <Inventory
        books={reptileBooksMockData.items}
        category={'reptiles'}
        getSingleBooks={jest.fn()}
        setBooks={jest.fn()}
        viewType={'SummaryView'} />
    </MemoryRouter>)
  });

  it('should render book titles', () => {
    expect(window.location.href).toEqual(url);  
    const bookTitle = inventory.getByRole('heading', { name: "Smart Kids: Reptiles and Amphibians" })
    const bookTitle2 = inventory.getByRole('heading', { name: mockBookTitle })
    expect(bookTitle).toBeInTheDocument()
    expect(bookTitle2).toBeInTheDocument()
  })

  it('should render covers of books', () => {
    const coverImg = inventory.getByRole('img', { name: "Smart Kids: Reptiles and Amphibians cover" })
    const covers = inventory.getAllByRole('img')

    expect(covers.length).toEqual(2)
    expect(coverImg).toBeInTheDocument()
  })

  it('should render start reading button', () => {
    const startReadingBtn = inventory.getByRole('button', { name: "Start Reading " + mockBookTitle })

    expect(startReadingBtn).toBeInTheDocument()
  })

  it('should render text snippet of each book', () => {
    const startReadingBtn = inventory.getByRole('button', { name: "Start Reading " + mockBookTitle })

    expect(startReadingBtn).toBeInTheDocument()
  })


})