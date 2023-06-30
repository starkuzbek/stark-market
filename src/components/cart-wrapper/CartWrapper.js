import React from 'react'
import "./CartWrapper.css"
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, decrementCart } from '../../context/cart'
import { AiFillDelete } from "react-icons/ai"



function CartWrapper({data}) {

  function handleSubmit(e){
    e.preventDefault();


  

    const text1 = document.getElementById("text1").value
    const text2 = document.getElementById("text2").value
    let my_text = `Buyurtma:%0A - 🧑 Ism: ${text1} %0A - 📞 Tel: ${text2} %0A`
    
    data?.forEach(item=>{
      my_text += `📝 Nomi: ${item.title} %0A`
      my_text += `🔢 Soni: ${item.quantity} %0A`
      my_text += `💵 Narxi: ${item.price} so'm %0A%0A`
    })
    my_text += `📦 Jami: ${data?.reduce((a, b) => a + (b.price * b.quantity), 0)} so'm %0A %0A`

    const token = "6222679811:AAHxF3FB3KBq7wqrJtG8pXBzneJBGJ39r28"
    const chat_id = -1001923633555
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    
  }




    const dispatch = useDispatch()
  return (
    <div className='cart__wrapper'>
     <div className="cart__wrapper-content">
     {
        data?.map((item)=> <div className='cart__wrapper-item' key={item.id}>

       <div className="asos">
       <div className="cart-rasm-name-qoshish">
        <div className="cart-rasm-name">
        <div className="cart__rasm">
            <img src={item.url} width={80} alt="" />
            </div>

            <div className="cart__name">
            <h3 className='mahsulot_nomi'>{item.title}</h3> <br />
            <h2><font style={{color:'#999FB3'}}>Stark Market</font></h2> <br />
            <div className="cart__ochirish">
            <button style={{color:'dodgerblue'}} onClick={()=> dispatch(removeFromCart(item))}><h1>O'chirish</h1></button>
          </div>
            </div>
        </div>

          
            <div className="cart__narx-qoshish">
            <button className='cart_ayirish' disabled={item.quantity <= 1} onClick={()=> dispatch(decrementCart(item))}>-</button>
            <span className='cart_soni'><h1 style={{fontWeight:300}}>{item.quantity}</h1></span>
            <button style={{color:'#DA002B'}} className='cart_qoshish' onClick={()=> dispatch(addToCart(item))}>+</button>
            </div>
         </div>




          <div className="cart-narx-ochirish">
         

            <div className="cart__narx">
            <h2 className='mahsulot_narxi'>{item.quantity * item.price} <font>so'm</font></h2>
            </div>
          </div>

       </div>
        </div>  ) 
       }  
     </div> 

       <div className="cart__wrapper-form">
       <h3>Buyurtma</h3>
       <form id='form' action="">
        <div className="cart_in">
        <h1>Ismingiz:</h1>
        <input id='text1' type="text" placeholder='Ism' />
        </div>
        <div className="cart_in">
        <h1>Telefon:</h1>
        <input id='text2' type="number" placeholder="+998"  />
        </div>
        <div className="cart_in">
            <h1>Promokod</h1>
            <input type="text3" placeholder='Promokodni kiriting' />
        </div> <br />

        <div className="buyurtma-other">
            <div className="buyurtma-haqida">
                <h2>Promokod:</h2>
                <p>0 so'm</p>
            </div>
            <div className="buyurtma-haqida">
                <h2>Bonus:</h2>
                <p>0 so'm</p>
            </div>
            <div className="buyurtma-haqida">
                <h2>Dostavka:</h2>
                <p>0 so'm</p>
            </div> <br />
       <hr /> <br />
            <div className="buyurtma-haqida">
                <h2>Buyurtma turi:</h2>
                <p style={{fontWeight:600}}>To'liq to'lash</p>
            </div>
        </div> <br />
       <h2>Jami: {data?.reduce((a,b)=> a+(b.price *b.quantity), 0)} so'm</h2>
      <br />
       <button onClick={handleSubmit}>Buyurtma berish</button>

       </form> <br />
       </div>

    </div>
    )
}

export default CartWrapper