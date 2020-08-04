

export const fetchBooks = async (searchCriteria) => {
  const urlParts = 
    [`https://www.googleapis.com/`,
    `books/v1/volumes?`,
    `q=${searchCriteria}`,
    `+nonfiction+children+books`,
    `&printType=books`,
    `&filter=partial`,
    `&startIndex=0`,
    `&maxResults=40`,
    ]

  if (searchCriteria === 'turtles') {
    urlParts.splice(3, 0, '+-mutant+-Michelangelo')
  }
  const url = urlParts.join('')
  try {
    const response = await fetch(url)
    const data = await response.json()
    if(response.ok){
      return data
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchSingleBook = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

