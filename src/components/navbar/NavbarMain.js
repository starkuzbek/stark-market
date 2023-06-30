import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { FiBarChart2 } from "react-icons/fi"
import { MdOutlinePerson } from "react-icons/md"
import { Link } from "react-router-dom"
import SideBar from '../side-bar/SideBar'



function NavbarMain() {
  const [show, setShow] = useState(false)
  document.body.style.overflow = show ? "hidden" : "auto"

  return (
    <>
    <div className='container navbar-main'>

      <div className="logo">
        <Link to={"/"}>
        <h2>STARK MARKET</h2>
        </Link>
      </div>

      <div className="navbar-katalog">
        <button onClick={()=> setShow(true)} className='nav-btn'>
          <AiOutlineMenu/>
          <span>Katalog</span>
        </button>

        <div className="navbar-search">
      <input type="text" placeholder='Katalog bo`yicha qidirish...' />
        <button><AiOutlineSearch/></button>
      </div>
      </div>

      

      <div className="nav-collection">
        <li className='nav-item'>
          <Link>
            <FiBarChart2/> 
            <span>Taqqoslash</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to={"/wishlist"}>
            <AiOutlineHeart/>
            <span>Sevimlilar</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to={"/cart"}>
            <AiOutlineShoppingCart/>
            <span>Savatcha</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to={"/login"}>
            <MdOutlinePerson/>
            <span>Kirish</span>
          </Link>
        </li>
      </div>
    <SideBar show={show} setShow={setShow}/>


    
    </div> <br /> <br />
    </>
  )
}

export default NavbarMain