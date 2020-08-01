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

})