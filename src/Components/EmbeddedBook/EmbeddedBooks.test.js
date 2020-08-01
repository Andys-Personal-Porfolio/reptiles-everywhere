import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import fetchBooksMockData from '../App/fetchBooksMockData'
import EmbeddedBook from './EmbeddedBook';
import { MemoryRouter } from 'react-router-dom';


describe('EmbeddedBook', () => {
  const bookToRender = fetchBooksMockData.items[0]

  it('should render a document if given a previewLink', () => {
    const { getByRole } = render(<MemoryRouter><EmbeddedBook bookToRender={bookToRender} /></MemoryRouter>)
    const embeddedBook = getByRole('document', { title: "All About the Reptiles of the World - Animal Books | Children's Animal Books" })

    expect(embeddedBook).toBeInTheDocument()
  })

  it('should render a back button', () => {
    const { getByRole } = render(<MemoryRouter><EmbeddedBook bookToRender={bookToRender} /></MemoryRouter>)
    const goBackBtn = getByRole('button', { name: 'Go Back To Home Page' })

    expect(goBackBtn).toBeInTheDocument()
  })

})