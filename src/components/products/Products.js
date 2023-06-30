import React, { useState, useEffect } from 'react'
// import "./Products.css"
import Skeleton from '../skeleton/Skeleton'
import { PRODUCTS } from "../../static/index"
import ProductWrapper from '../product-wrapper/ProductWrapper'

function Products() {




  return (
    <div>
        <ProductWrapper data={PRODUCTS} /> 
       
        {/* <Skeleton/> */}
    </div>
  )
}

export default Products