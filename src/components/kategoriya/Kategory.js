import React from 'react'
import "./Kategory.css"

import kat1 from "../../assets/kategory/kat1.png"
import kat2 from "../../assets/kategory/kat2.png"
import kat3 from "../../assets/kategory/kat3.png"
import kat4 from "../../assets/kategory/kat4.png"
import kat5 from "../../assets/kategory/kat5.png"
import kat6 from "../../assets/kategory/kat6.png"
import kat7 from "../../assets/kategory/kat7.png"
import kat8 from "../../assets/kategory/kat8.png"


const KAT_DATA = [
    {
        url: kat1,
        title: "Televizorlar, foto va video"
    },
    {
        url: kat2,
        title: "Noutbuklar, kompyuter va printerlar"
    },
    {
        url: kat3,
        title: "Smartfon, gadjetlar va aksesuarlar"
    },
    {
        url: kat4,
        title: "Maishiy texnika"
    },
    {
        url: kat5,
        title: "Barchasi oshxona uchun "
    },
    {
        url: kat6,
        title: "Sport anjomlari"
    },
    {
        url: kat7,
        title: "Go'zallik va salomatlik"
    },
    {
        url: kat8,
        title: "Chet eldan tovarlar"
    }
]




function Kategory() {
  return (
    <div className='container'>
        <div className="kategoriya">
            {
                KAT_DATA?.map((item, inx)=> <div key={inx} className='kategoriya__collection'>
                    <img src={item.url} alt="" />
                    <h1>{item.title}</h1>
                </div>)
            }
        </div>
    </div>
  )
}

export default Kategory