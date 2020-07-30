export const getChildrensBooks = async() => {
  try {
    const response = await fetch("https://openlibrary.org/subjects/children.json")
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}