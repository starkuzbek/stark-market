import React from 'react'
import "./ProductWrapper.css"
import { Link } from 'react-router-dom'
import {AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart} from "react-icons/ai"
import { PRODUCTS } from "../../static/index"
import { FiTrash2 } from "react-icons/fi"
import { useDispatch } from 'react-redux'
import { addToHeart, removeFromHeart } from "../../context/heart"
import { useSelector } from 'react-redux'
import { addToCart } from '../../context/cart'




function ProductWrapper({data}) {
  const dispatch = useDispatch();
  const heart = useSelector(s => s.heart.value)
 

  return (
    <div className="products">
    {
      data?.map(({id, title, url, price}) => ( <div key={id} className='card'>
        <Link to={`/product/${id}`} state={{id,title,url,price}} className="card__image">
          <img src={url} alt="" />
        </Link>
             <button onClick={()=> dispatch(addToCart({id, url, price, title}))} className='price_cart'>
             <AiOutlineShoppingCart/>
           </button>
        <button className='cart__heart'>
            {
                heart.some(i => i.id === id) ?
                <AiFillHeart className='yurak' onClick={()=> dispatch(removeFromHeart({id, title, url, price}))}/> :
                <AiOutlineHeart onClick={()=> dispatch(addToHeart({id, title, url, price}))}/>
            }
          </button>
        <div className="card__body">
          <p className='card__title'>{title}</p>
          <p className='card__rating'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <span>0 ta sharh</span>
          </p>
          <div className="card__monthly">
            <span>{Math.round(price * 1.44 / 12)} so'm/12 oy</span>
          </div>
          <div className="card__price">
            <div>
            <del>{price * 1.5} so'm</del>
            <p>{price} so'm</p>
            </div>
          </div> <br />
            <button className="bir__clickda__sotibol">
                Birklikda olish
            </button>
        </div>
      </div>))
    }
  </div>
  )
}

export default ProductWrapper