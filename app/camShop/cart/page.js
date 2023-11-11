"use client"
import React, { useEffect, useState } from 'react'
import './module.cart.css'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
  projectId : "f89xy3cs",
  dataset : "production",
  apiVersion : "2023-11-05",
  useCdn : true
})

function urlFor(source) {
  return builder.image(source)
}



export default function Cart() {

  const [cartItems,setCartItems] = useState([])
  console.log(cartItems)
  

  

   useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('cartItems'))
      if (data) {
          setCartItems(data)
      }
      else {
          setCartItems(data)
      }
    }
   },[])
 

  return (
    <div className='cart h-screen w-screen'>
      <div className='cart-bg w-screen h-full'>
       
      </div>
      <h1 className='text-2xl text-white'></h1>
      <div class="mt-24 mx-auto overflow-x-auto w-5/6">
      <table class="table text-center">
        <thead>
          <tr>
            <th>Product No</th>
            <th>Thumbnail</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
       {
        cartItems ? 
        cartItems.map(({name,image,price,quantity,size,_id},index)=>
        
          <tr key={_id}>
          <td>{index + 1}</td>
            <td>
              <div class="flex items-center justify-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src={urlFor(image).url()} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{size}</td>
            <td>{quantity*price}</td>
            <th>
              <button class="btn btn-ghost btn-xs">Remove</button>
            </th>
          </tr>
        
        )
       
      :
      <h1 className='text-3xl text-red-300'>no data</h1>
       }
       </tbody>
      </table>
      </div>

    </div>
  )
}
