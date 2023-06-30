import React from 'react'
import "./WishlistWrapper.css"
import { useDispatch } from 'react-redux'
import { removeFromHeart } from '../../context/heart';

function WishWrapper({data}) {






    const dispatch = useDispatch()
  return (
    <div className='wish__wrapper'>
     <div className="wish__wrapper-content">
     {
        data?.map((item)=> <div className='wish__wrapper-item' key={item.id}>

       <div className="asos">
       <div className="wish-rasm-name-qoshish">
        <div className="wish-rasm-name">
        <div className="wish__rasm">
            <img src={item.url} width={80} alt="" />
            </div>

            <div className="wish__name">
            <h3 className='mahsulot_nomi'>{item.title}</h3> <br />
            <button className='barer'>Барьер</button>
            </div>
        </div>

          
         </div>


          <div className="wish-narx-ochirish">

            <div className="wish__narx">
            <h2 className='mahsulot_narxi'>{item.quantity * item.price} <font>so'm</font></h2>
            <span className='card_monthly'>{Math.round(item.price * 1.44 / 12)}  <font> so'm/12</font></span>
            </div>
          </div>


       </div>
          <div className="wish__ochirish">
            <button>Savatchaga qo'shish</button> <br /> <br />
            <button className='ochirish' onClick={()=> dispatch(removeFromHeart(item))}>O'chirish</button>
          </div>
        </div> )  
       } 
     </div> 



    </div>
    )
}

export default WishWrapper