"use client"
import React from 'react'
import './module.cart.css'
import { useShoppingCart } from 'use-shopping-cart'

export default function Cart() {
  const {cartDetails} = useShoppingCart()
  console.log(cartDetails)
  const cartItems = Object.entries(cartDetails).map(([_,product]) => product)

  return (
    <div className='cart h-screen w-screen'>
      <div className='cart-bg w-screen h-full'></div>

    </div>
  )
}
