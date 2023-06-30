import React from 'react'
import "./Wishlist.css"
import heartsimg from "../../assets/heart-bubble.svg"
import { useSelector } from 'react-redux'
import WishWrapper from '../../components/wishlist-wrapper/WishlistWrapper'

function Wishlist() { 
  const heart = useSelector(s => s.heart.value)
  console.log(heart);
  return (
    <div>
      {
        heart.length ? 
        <WishWrapper data={heart}/>
        :
        <div className="wishlist">
        <img src={heartsimg} alt="" />
        <h2>Sevimli mahsulotlar yo'q</h2>
        <p>Mahsulotdagi ❤  belgisi bilan qo'shing️</p>
        
        </div>
      }
     
    </div>
  )
}

export default Wishlist