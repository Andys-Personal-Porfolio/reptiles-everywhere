import React from 'react'
import { render, waitFor, getAllByRole } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom';
import { fetchBooks } from '../../ApiCalls'
import '@testing-library/jest-dom';
import fetchBooksMockData  from './fetchBooksMockData'

jest.mock("../../ApiCalls");


describe('App', () => {

  fetchBooks.mockResolvedValue(fetchBooksMockData)
  
  it('should render title on load', async () => {
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>)
    const title = await waitFor(() => getByRole('heading', 'Reptiles Everywhere!'))
    expect(title).toBeInTheDocument()
  })

  it('should render covers of books on load', async () => {
    const { getByRole, getAllByRole} = render(<MemoryRouter><App/></MemoryRouter>)
    const coverImg = await waitFor(() => getByRole('img', { name: "Smart Kids: Reptiles and Amphibians cover"}))
    const covers = await waitFor(() => getAllByRole('img'))

    expect(covers.length).toEqual(2)
    expect(coverImg).toBeInTheDocument()

  })

})