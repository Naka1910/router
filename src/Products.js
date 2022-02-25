import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Products() {
  const [products, setProducts] = useState([]);
  function getData() {
    axios.get('https://retoolapi.dev/FNoduP/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="Products-container">
      {
        products.map((item) => {
          return (
            <div className="prod-cont" key={item.id}>
              <img className="prod-img" src={item.image} alt={item.image} />
              <p className="prod-text"><Link to='/Product/1'>{item.description}</Link></p>
              <p className="Prod-price">{item.price}</p>

            </div>
          )
        })
      }
    </div>
  )
}