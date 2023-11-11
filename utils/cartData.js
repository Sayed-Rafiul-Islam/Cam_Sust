"use client"
import React from 'react'

export default function cartData(item) {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const test = localStorage.getItem('cartItems') ? true : false
        // const data = JSON.parse(localStorage.cartItems)
      
        
        if (test) {
            
            const cartItems = JSON.parse(localStorage.cartItems)
            const existingItem = cartItems.filter(cartItem => cartItem._id === item._id && cartItem.size === item.size )
            const test1 = existingItem.length ? true : false

        //    console.log(test1)
            
            
            if(test1) {
                
            const exist = existingItem[0]
            const temp = cartItems.filter(cartItem => cartItem.size !== item.size )
            console.log(temp)
            exist.price = exist.price + 1;
            temp.push(exist)
            localStorage.setItem("cartItems", JSON.stringify(temp))
            }
            else  {
                console.log("no hi")
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
