import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom';
import { fetchBooks, fetchSingleBook } from '../../ApiCalls'
import { 
  reptileBooksMockData, 
  turtleBooksMockData,
  allAboutReptilesMockData}  from './fetchBooksMockData'

jest.mock("../../ApiCalls");


describe('App', () => {
  global.window = Object.create(window);
  const url = "http://localhost:3000/reptiles/SummaryView";

  Object.defineProperty(window, 'location', {
    value: {
      href: url
    }
  })
  it('should have a location on load', async () => {
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>)
    waitFor(() => expect(window.location.href).toEqual(url));
  })

  fetchBooks.mockResolvedValue(reptileBooksMockData)
  const mockBookTitle = "All About the Reptiles of the World - Animal Books | Children's Animal Books";

  it('should render reptile books titles on load', async () => {
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>)
    const bookTitle = await waitFor(() => getByRole('heading', { name: "Smart Kids: Reptiles and Amphibians" }))
    const bookTitle2 = await waitFor(() => getByRole('heading', { name: mockBookTitle }))
    expect(bookTitle).toBeInTheDocument()
    expect(bookTitle2).toBeInTheDocument()
  })

  it('should render reptile books titles on load and change to turtle books on click, and change back to reptiles on click', async () => {
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>)

    const reptileTitle = await waitFor(() => getByRole('heading', { name:"Smart Kids: Reptiles and Amphibians"}))
    expect(reptileTitle).toBeInTheDocument()

    fetchBooks.mockResolvedValueOnce(turtleBooksMockData)
    const turtleBtn = await waitFor(() => getByRole('button', { name: 'turtles' }))
    fireEvent.click(turtleBtn)

    const turtleTitle = await waitFor(() => getByRole('heading', { name: "Sea Turtles" }))
    const turtleTitle2 = await waitFor(() => getByRole('heading', { name: "Follow the Moon Home" }))
    expect(turtleTitle).toBeInTheDocument()
    expect(turtleTitle2).toBeInTheDocument()

    const reptileBtn = await waitFor(() => getByRole('button', { name: 'reptiles' }))
    fireEvent.click(reptileBtn)

    const reptileTitle2 = await waitFor(() => getByRole('heading', { name: "Smart Kids: Reptiles and Amphibians" }))
    expect(reptileTitle2).toBeInTheDocument()
  })

  it('should render covers of books on load', async () => {
    const { getByRole } = render(<MemoryRouter><App/></MemoryRouter>)
    const coverImg = await waitFor(() => getByRole('img', { name: "Smart Kids: Reptiles and Amphibians cover"}))
    const coverImg2 = await waitFor(() => getByRole('img', { name: mockBookTitle + " cover" }))

    expect(coverImg).toBeInTheDocument()
    expect(coverImg2).toBeInTheDocument()
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

  it('should be able to click cover view button and see images of medium sized covers', async () => {
    fetchSingleBook.mockResolvedValue(allAboutReptilesMockData)
    const { getAllByRole, getByRole } = render(<MemoryRouter><App /></MemoryRouter>)
    const url = "http://localhost:3000/reptiles/SummaryView";
    await waitFor(() => expect(window.location.href).toEqual(url));

    const bookCoverBtn = await waitFor(() => getByRole('button', { name: 'Book Covers' }))

    expect(bookCoverBtn).toBeInTheDocument()

    fireEvent.click(bookCoverBtn)
    const summariesBtn = await waitFor(() => getByRole('button', { name: 'Summaries' }))
    const mediumCovers = await waitFor(() => getAllByRole('img', {name: mockBookTitle + " cover"}))
    const reptileBooksLabel = await waitFor(() => getByRole('heading', { name: 'Reptile books:' }))
    const url2 = "http://localhost:3000/reptiles/CoverView";
    waitFor(() => expect(window.location.href).toEqual(url2));
    expect(summariesBtn).toBeInTheDocument()
    expect(reptileBooksLabel).toBeInTheDocument()
    expect(mediumCovers.length).toBe(2)

    fireEvent.click(summariesBtn)
    const bookCoverBtn2 = await waitFor(() => getByRole('button', { name: 'Book Covers' }))
    const url3 = "http://localhost:3000/reptiles/SummaryView";
    await waitFor(() => expect(window.location.href).toEqual(url3));
    expect(bookCoverBtn2).toBeInTheDocument()
    
  })

  it.skip('should render error message if fetchSingleBooks fetch returns error', async () => {
    // fetchSingleBook.mockImplementationOnce(() => {
    //   throw new Error('Error: This is a cool test')
    // })
    const bookCoverBtn = await waitFor(() => getByRole('button', { name: 'Book Covers' }))
    expect(bookCoverBtn).toBeInTheDocument()

    fireEvent.click(bookCoverBtn)
    const { getByRole } = render(<MemoryRouter><App /></MemoryRouter>)

    // const errorMessage = await waitFor(() => getByRole('heading', { name: "Error: This is a cool test" }))
    // expect(errorMessage).toBeInTheDocument()

  })

})