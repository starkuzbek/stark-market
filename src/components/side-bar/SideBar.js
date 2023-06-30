import React from 'react'
import "./SideBar.css"
import { IoIosArrowForward } from "react-icons/io"


import nasiya from "../../assets/icons/nasiya.png"
import earfon from "../../assets/icons/earfon.png"
import blender from "../../assets/icons/blender.png"
import tshirt from "../../assets/icons/tshirt.png"
import shoes from "../../assets/icons/shoes.png"
import bag from "../../assets/icons/bag.png"
import gozallik from "../../assets/icons/gozallik.png"
import salomatlik from "../../assets/icons/salomatlik.png"
import home from "../../assets/icons/home.png"
import paint from "../../assets/icons/paint.webp"
import car from "../../assets/icons/car.png"
import horse from "../../assets/icons/horse.png"
import ball from "../../assets/icons/ball.png"



const DATA = [
  {
    icon: nasiya,
    title: "Halol nasiya"
  },
  {
    icon: earfon,
    title: "Elektronika"
  },
  {
    icon: blender,
    title: "Maishiy texnika"
  },
  {
    icon: tshirt,
    title: "Kiyim"
  },
  {
    icon: shoes,
    title: "Poyabzallar"
  },
  {
    icon: bag,
    title: "Aksesuarlar"
  },
  {
    icon: gozallik,
    title: "Go'zallik"
  },
  {
    icon: salomatlik,
    title: "Salomatlik"
  },
  {
    icon: paint,
    title: "Qurilish"
  },
  {
    icon: horse,
    title: "Bolalar tovarlari"
  },
  {
    icon: ball,
    title: "Sport va hordiq"
  },
  {
    icon: home,
    title: "Uy va hordiq"
  },
  {
    icon: car,
    title: "Avtotovarlar"
  }
]





function SideBar({show, setShow}) {
  return (
    <>
    {
        show ?
        <div onClick={()=> setShow(false)} className='sidebar__shadow'></div>
        :<></>
    }
    <div className={`sidebar ${show ? "show" : ""}`}>
    {
      DATA?.map((item)=>
      <div className="sidebar__kategoriya">

      <div className="sidebar__icons">
     <div className="sidebar_first">
     <img src={item.icon} alt="" />
      <h2>{item.title}</h2>
     </div>
      <IoIosArrowForward/>
      </div>
     

    </div>
      )
    }

    </div>
    </>
  )
}

export default SideBar