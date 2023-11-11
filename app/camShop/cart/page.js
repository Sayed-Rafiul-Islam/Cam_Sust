"use client"
import React from 'react'
import './module.cart.css'



export default function Cart() {


  // const {cartDetails} = useShoppingCart()
  // console.log(cartDetails)
  // const cartItems = Object.entries(cartDetails).map(([_,product]) => product)

  return (
    <div className='cart h-screen w-screen'>
      <div className='cart-bg w-screen h-full'>
       
      </div>
      <h1 className='text-2xl text-white'></h1>
        <button className='text-3xl text-red-400 mt-20' >Clear</button>

    </div>
  )
}
