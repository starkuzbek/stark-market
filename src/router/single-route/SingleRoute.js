import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillStar, AiOutlineShopping, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsTelegram, BsWhatsapp } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import { GoDotFill } from "react-icons/go"
import "./SingleRoute.css";

function SingleRoute() {
  const data = useLocation().state;

  const [amount, setAmout] = useState(1);

  return (
    <div className="container">
      <div className="product__info__container">
        <div className="product__info" key={data.id}>
          <div className="left">
            <img src={data.url} alt="" />
          </div>
          <div className="right">
            <div className="top">
              <h3 className="info__title">{data.title}</h3>

              <p className="info__rating">
                <div className="rate">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                  <span>0 ta sharh</span>
                </div>
              </p>
              <div className="price">
                  <div>
                    <h3>{amount * data.price} so'm</h3>
                  </div>
                </div> <br />
              <p className="seller">Brend: Stark Market</p> <br />
              <p className="delivery">Holati: <span><GoDotFill/> Sotuvda bor</span></p>
              <p className="share-other"><font>Ulashish:</font> <span><BsFacebook className="single_face"/> <BsTelegram className="single_tele"/> <AiFillTwitterCircle className="single_twit"/> <IoLogoWhatsapp className="single_what"/></span></p>
            </div>
            <div className="bottom">
              <div className="amount">
           
              
               
                <div className="info__cart">
                  <button className="buy__cart">
                    {/* <AiOutlineShopping/> */}
                   <span>Savatga qo'shish</span></button>
                  <button>Bir klikda olish</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default SingleRoute;
