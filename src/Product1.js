import axios from "axios";
import { useEffect, useState } from "react";

export default function Product1() {
  const [products1, setProducts1] = useState([]);
  function getData() {
    axios.get('https://retoolapi.dev/FNoduP/products/1')
      .then(response => {
        setProducts1([response.data])
        console.log(products1)
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      Product
      {
        products1?.length > 0 &&
        products1.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt={item.image} />
              <p>{item.description}</p>

            </div>
          )
        })
      }
    </div>
  )
}