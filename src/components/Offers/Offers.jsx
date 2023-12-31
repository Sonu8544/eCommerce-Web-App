import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
   <>
   <section className="page-width offers" id='marginn'>
     <div className="offers-left">
      <h1>Exclusive</h1>
      <h1>Offers for you</h1>
      <p>ONLY ON BEAST SELLER</p>
      <button> check now </button>
     </div>
     <div className="offers-right">
      <img src={exclusive_image} alt="" />
     </div>
   </section>
   </>
  )
}

export default Offers
