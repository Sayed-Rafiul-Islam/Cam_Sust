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
  let [costs,setCosts] = useState(0)
  let [negCosts,setNegCosts] = useState(0)
  const [tempCart,setTempCart] = useState([])
  const [modal,setModal] = useState(true)


  const handleCartItem = (_id,size) => {
        const newCart = cartItems.filter(cartItem => cartItem._id !== _id || cartItem.size !==size)
        const thatItem = cartItems.filter(cartItem => cartItem._id === _id && cartItem.size ===size)
        setNegCosts(thatItem[0].price)
        setTempCart(newCart)
        setModal(false);
  }

  const confirmCart = (confirm) => {
    if(confirm) {
      setCartItems(tempCart)
      localStorage.setItem("cartItems", JSON.stringify(tempCart))
      setCosts(costs-negCosts)
      localStorage.setItem("costs", JSON.stringify(costs-negCosts))
      setModal(true)
    }
    else {
      setModal(true)
    }

  }
  

  

   useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('cartItems'))
      const cost = JSON.parse(localStorage.getItem('costs'))
      if (data) {
          setCartItems(data)
          setCosts(cost)
          
      }
      else {
          setCartItems(data)
      }
    }
   },[modal])
 

  return (
    <div className=' h-screen w-screen'>
      <div className={modal ? 'modal-off' : 'modal-on'}>
              <h3>Are you sure?</h3>
              <div className='text-white'>
                <button className='mx-2' onClick={()=>confirmCart(true)}>Yes</button>
                <button className='mx-2' onClick={()=>confirmCart(false)}>No</button>
              </div>
        </div>
      <div className='cart-bg w-screen h-full'>
           
      </div>
      <h1 className='text-2xl text-white'></h1>
      <div class="mt-24 overflow-hidden cart mx-auto flex">
       
       <table class="table text-center text-white">
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

            <tr key={_id} className='row w-full'>
            <td>{index + 1}</td>
              <td>
                <div class="flex justify-center">
                    <div class="w-12 h-12 avatar rounded-full">
                      <img className='rounded-full' src={urlFor(image).url()} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
              </td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{size}</td>
              <td className='py-6'>{quantity*price}</td>
              <td>
                <button onClick={()=>handleCartItem(_id,size)} className='py-1 px-4 cart-btn'>Remove</button>
              </td>
            </tr>
          
)
        
        :
        <h1 className='text-3xl text-red-300'>no data</h1>
        }
        </tbody>

        </table>
       
        <div className='checkout-box text-white'>
              <h2 className='text-2xl mt-5 mb-10 text-white font-bold text-center'>Total Amount</h2>
              <div className='flex justify-between w-3/4 mx-auto mb-5'>
                <p>Product Price :</p>
                <p>{costs}</p>
              </div>
              <div className='flex justify-between w-3/4 mx-auto pb-5'>
                <p>Delivery Charge :</p>
                <p>130</p>
              </div>
              <div className='flex justify-between w-3/4 mx-auto pt-5 checkout-tot'>
                <p>Total :</p>
                <p>{costs}</p>
              </div>
        </div>
      </div>

    </div>
  )
}
