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

export const getBooks = async () => {
  try {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=the+giver&printType=books")
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}