import React, {useEffect} from 'react'
import styles from '../css/Product.css'

function Product(props) {
  useEffect(() => {
    props.leaveHome()
  }, [])
  return (
    <div className="product-page">
      <div className="total-container"></div>
    </div>
  )
}

export default Product
