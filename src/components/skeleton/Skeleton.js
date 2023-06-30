import React from 'react'
import "./Skeleton.css"

function Skeleton() {
  return (
    <div className='container skeleton'>
        {
            new Array(8).fill("").map((_, inx)=>    <div key={inx} className="skeleton__item">
            <div className="skeleton__img skeleton__anime"></div>
            <div className="skeleton__title skeleton__anime"></div>
            <div className="skeleton__desc skeleton__anime"></div>
            <div className="skeleton__btns">
                <div className="skeleton__price skeleton__anime"></div>
            </div> <br />
                <div className="skeleton__circle skeleton__anime"></div>
    </div> )
        }
       
    </div>
  )
}

export default Skeleton