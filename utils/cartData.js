"use client"
import React from 'react'

export default function cartData(item) {
    
    if (typeof window !== 'undefined') {
        const test = localStorage.getItem('cartItems') ? true : false
      
        
        if (test) {
            
            const cartItems = JSON.parse(localStorage.cartItems)
            const existingItem = cartItems.filter(cartItem => cartItem._id === item._id && cartItem.size === item.size )
            const updateRequired = existingItem.length ? true : false            
            if(updateRequired) {
                
            const exist = existingItem[0]
            const temp = cartItems.filter(cartItem => cartItem.size !== item.size )
            exist.quantity = exist.quantity + 1;
            temp.push(exist)
            localStorage.setItem("cartItems", JSON.stringify(temp))
            }
            else  {
                cartItems.push(item)
                localStorage.setItem("cartItems", JSON.stringify(cartItems))
            }
        }
        else {
            const cartItems = []
            cartItems.push(item)
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
        }
      }  
}
