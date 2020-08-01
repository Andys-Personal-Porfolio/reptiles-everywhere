// export const getChildrensBooks = async() => {
//   try {
//     const response = await fetch("https://openlibrary.org/subjects/animals.json")
//     const data = await response.json()
//     console.log(data)
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

export const fetchBooks = async (searchCriteria) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=
      ${searchCriteria}
      non+fiction+children+books&printType=books&filter=partial&tbs=bkv:p&maxResults=40&safe=active&maxAllowedMaturityRating=not-mature`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchSingleBook = async () => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/TtA4DwAAQBAJ`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

