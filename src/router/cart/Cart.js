import React from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartWrapper from '../../components/cart-wrapper/CartWrapper'

function Cart() {
  const cart = useSelector(s => s.cart.value)

  return (
    <div className='container'>
      {
        cart.length ?
        <CartWrapper data={cart}/>
        :
        <div className="cart">
          <img src={"https://olcha.uz/_nuxt/cart.de8a9297.png"} alt="" />
        <h2>Savatchangiz bo'sh</h2>
        <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
          <Link to={"/"}>
        <button>Asosiy sahifaga</button>
          </Link>
        </div>
      }
     
    </div>
  )
}

export default Cart