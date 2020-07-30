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

export const getBooks = async (searchCriteria) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchCriteria}+children+books&printType=books&maxResults=40&safe=active&outcome=embed`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}