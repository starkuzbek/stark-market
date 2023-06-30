import React from 'react'
import Slider from '../../components/slider/Slider'
import Kategory from '../../components/kategoriya/Kategory'
import Products from '../../components/products/Products'


function Home() {
  return (
    <div className='home'>
        <Slider/>
        <Kategory/>
        <Products/>
    </div>
  )
}

export default Home