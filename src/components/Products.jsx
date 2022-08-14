import React from 'react'
import Product from './Product'
import AppContext from '../context/AppContext';
import '../styles/components/Products.css'

function Products() {
  const { state, addToCart } = React.useContext(AppContext);
  const { products } = state;

  const handleAddToCard = (product) => {
    addToCart(product);
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(e => (
            <Product
              key={e.id}
              product={e}
              handleAddToCard={handleAddToCard}
            />
        ))}
      </div>
    </div>
  )
}

export default Products