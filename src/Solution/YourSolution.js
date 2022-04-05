import '../AdditionalFiles/App.css'
import * as React from 'react'

//This is the API url to fetch from
const API_URL = `https://matchesfashion.com/api/products`;
const FIRST_PAGE = 0;
const LAST_PAGE = 4;
// const TAX_RATE = 0.08;

function YourSolution() {
  const [items, setItems] = React.useState([])
  const [error, setError] = React.useState(null)
  const [currentPage, setCurrentPage] = React.useState(0)

  React.useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`${API_URL}?page=${currentPage}`)
        let data = await res.json()
        setItems(data.products)
      } catch (err) {
        setError(err)
        console.log(error)
      }
    }
    getData()
  }, [currentPage])

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="App">
      <table id="products">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Quantity Sold</th>
            <th>Sold Price</th>
            <th>Cost To Business</th>
          </tr>
        </thead>
        {items.length && (
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.brand}</td>
                <td>{item.name}</td>
                <td>{item.quantitySold}</td>
                <td>{item.soldPrice}</td>
                <td>{item.costToBusiness}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      <button disabled={currentPage === FIRST_PAGE}>
        First Page
      </button>
      <button onClick={handlePrev} disabled={currentPage === FIRST_PAGE}>
        Previous Page
      </button>
      <button onClick={handleNext} disabled={currentPage === LAST_PAGE}>
        Next Page
      </button>
      <button disabled={currentPage === LAST_PAGE}>
        Last Page
      </button>
    </div>
  )
}

export default YourSolution
