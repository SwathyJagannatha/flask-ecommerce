import React, {useState, useEffect} from "react";

const ProductList = ({orderID}) => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    if (orderID) {
      const fetchedProducts = [
        {
          id: 'A123',
          name: 'Coffee'
        }, 
        { 
          id: 'B456',
          name: 'Croissant'
        }
      ]

      setProducts(fetchedProducts); 
    }
  }, [orderID])

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} (ID: {product.id})</li>
        ))}
      </ul>
    </div>
  )

}

export default ProductList