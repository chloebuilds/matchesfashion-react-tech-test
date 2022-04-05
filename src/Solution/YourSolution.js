import '../AdditionalFiles/App.css';
import * as React from "react";

//This is the API url to fetch from

const API_URL = `https://matchesfashion.com/api/products`;
// const TAX_RATE = 0.08;

function YourSolution() {
  const [items, setItems] = React.useState([])
  const [error, setError] = React.useState(null)


  React.useEffect (() => {
    const getData = async () => {
      try {
        let res = await fetch(`${API_URL}?page=0`)
        let data = await res.json()
        console.log('fetch data', data)
        console.log('the products -->', data.products)
        setItems(data.products)
      } catch (err) {
        setError(err)
        console.log(error)
      } 
    }
    getData()
  }, [])
  

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
        {items.length && 
          <tbody>
            {items.map(item => (
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
          }
      </table>
    
      <button>First Page</button>
      <button>Previous Page</button>
      <button>Next Page</button>
      <button>Last Page</button>
    </div>
  );
}

export default YourSolution;
