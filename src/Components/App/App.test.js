import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom';
import { fetchBooks } from '../../ApiCalls'
import '@testing-library/jest-dom';
import fetchBooksMockData  from './fetchBooksMockData'

jest.mock("../../ApiCalls");


describe('App', () => {

  fetchBooks.mockResolvedValue(fetchBooksMockData)
  const mockBookTitle = "All About the Reptiles of the World - Animal Books | Children's Animal Books";

  it('should render website title Reptiles Everywhere! on load', async () => {
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>)
    const title = await waitFor(() => getByRole('heading', {name:'Reptiles Everywhere!'}))
    expect(title).toBeInTheDocument()
  })

  it('should render book titles on load', async () => {
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>)
    const bookTitle = await waitFor(() => getByRole('heading', { name:"Smart Kids: Reptiles and Amphibians"}))
    const bookTitle2 = await waitFor(() => getByRole('heading', {name: mockBookTitle }))
    expect(bookTitle).toBeInTheDocument()
    expect(bookTitle2).toBeInTheDocument()
  })

  it('should render covers of books on load', async () => {
    const { getByRole, getAllByRole} = render(<MemoryRouter><App/></MemoryRouter>)
    const coverImg = await waitFor(() => getByRole('img', { name: "Smart Kids: Reptiles and Amphibians cover"}))
    const covers = await waitFor(() => getAllByRole('img'))

    expect(covers.length).toEqual(2)
    expect(coverImg).toBeInTheDocument()
  })

  it('should render error message if fetch returns error', async () => {
    fetchBooks.mockImplementationOnce(() => {
      throw new Error('Error: This is a cool test')
    })

    const { getByRole} = render(<MemoryRouter><App/></MemoryRouter>)
    const errorMessage = await waitFor(() => getByRole('heading', { name: "Error: This is a cool test" }))
    expect(errorMessage).toBeInTheDocument()

  })

  it('should render start reading button on load', async () => {
    const { getByRole} = render(<MemoryRouter><App/></MemoryRouter>)
    const startReadingBtn = await waitFor(() => getByRole('button', { name: "Start Reading " + mockBookTitle}))

    expect(startReadingBtn).toBeInTheDocument()
  })

  it('should go to the embedded book page on click and back to home on click back  ', async () => {
    const { getByRole } = render(<MemoryRouter><App/></MemoryRouter>)
    const bookTitle = await waitFor(() => getByRole('heading', { name: "Smart Kids: Reptiles and Amphibians" }))
    const startReadingBtn = await waitFor(() => getByRole('button', { name: "Start Reading " + mockBookTitle}))
    expect(bookTitle).toBeInTheDocument()
    expect(startReadingBtn).toBeInTheDocument()

    fireEvent.click(startReadingBtn)
    const embeddedBook = await waitFor(() => getByRole('document', {title: mockBookTitle}))
    const goBackBtn = await waitFor(() => getByRole('button', { name: 'Go Back To Home Page'}))
    expect(bookTitle).not.toBeInTheDocument()
    expect(embeddedBook).toBeInTheDocument()
    expect(startReadingBtn).not.toBeInTheDocument()
    expect(goBackBtn).toBeInTheDocument()

    fireEvent.click(goBackBtn)
    const bookTitle2 = await waitFor(() => getByRole('heading', { name: "Smart Kids: Reptiles and Amphibians" }))
    const startReadingBtn2 = await waitFor(() => getByRole('button', { name: "Start Reading " + mockBookTitle }))
    expect(bookTitle2).toBeInTheDocument()
    expect(startReadingBtn2).toBeInTheDocument()
  })

})