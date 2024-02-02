"use client"
import React, { useEffect, useState } from 'react'
import './module.cart.css'
import imageUrlBuilder from '@sanity/image-url'
import { toast } from 'react-toastify'
import "animate.css";
import Image from 'next/image'

const builder = imageUrlBuilder({
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
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
  let [negCosts,setNegCosts] = useState({})
  const [tempCart,setTempCart] = useState([])
  const [modal,setModal] = useState(true)
  const [delivery,setDelivery] = useState(false)


  const handleCartItem = (_id,size) => {
        const newCart = cartItems.filter(cartItem => cartItem._id !== _id || cartItem.size !==size)
        const thatItem = cartItems.filter(cartItem => cartItem._id === _id && cartItem.size ===size)
        setNegCosts(thatItem[0])
        setTempCart(newCart)
        setModal(false);
  }
  const confirmCart = (confirm) => {

    if(confirm) {

      setCartItems(tempCart)
      localStorage.setItem("cartItems", JSON.stringify(tempCart))
      setCosts(costs-(negCosts.price*negCosts.quantity))
      localStorage.setItem("costs", JSON.stringify(costs-(negCosts.price*negCosts.quantity)))
      setModal(true)
      toast.error(`${negCosts.quantity} ${negCosts.name}${ negCosts.quantity > 1 ? 's' : ''} has been removed from the cart`)
    }
    else {
      setModal(true)
    }

  }
   useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('cartItems'))
      const cost = JSON.parse(localStorage.getItem('costs'))
      setCosts(cost)
      if (cost === 0) {
        setDelivery(false)
      }
      if (data) {
          setCartItems(data)       
      }
      else {
          setCartItems(data)
      }
    }
   },[modal,delivery])
 

  return (
    <div className='relative h-screen w-screen'>
      <div className={modal ? 'modal-bg-off' : 'modal-bg-on'}>
              <div className='modal animate__animated animate__faster animate__bounceIn'>
              <h3 className='text-center lg:text-3xl lg:pt-24 text-2xl pt-8'>Are you sure?</h3>
              <div className='text-white float-right modal-btns'>
                <button className='mx-2 modal-yes' onClick={()=>confirmCart(true)}>Yes</button>
                <button className='mx-2 modal-no' onClick={()=>confirmCart(false)}>No</button>
              </div>
              </div>
        </div>
      <div className='cart-bg w-screen h-full animate__animated animate__fadeInDown'>
           
      </div>
      <div className="mt-24 overflow-hidden cart mx-auto flex lg:flex-row flex-col lg:pb-0 pb-10">
        {
          cartItems ?
          <div className='table-wrapper animate__animated animate__fadeInLeft'>
       <table className="table text-center text-white">
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
          cartItems.map(({name,image,price,quantity,size,_id},index)=>

            <tr key={_id} className='row w-full'>
            <td>{index + 1}</td>
              <td>
                <div className="flex justify-center">
                    <div className="w-12 h-12 avatar rounded-full">
                      <div className='product-image'>
                          <Image fill className='rounded-full' src={urlFor(image).url()} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                </div>
              </td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{size}</td>
              <td className='py-6'>{quantity*price}</td>
              <td>
                <button onClick={()=>handleCartItem(_id,size)} className='px-2 py-2 cart-btn'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  </button>
              </td>
            </tr>       
          )

        }
        </tbody>

        </table>
        </div>
        :
        <div className='mx-auto lg:mt-40'>
            <h2 className='text-6xl text-red-600'>No Product !</h2>
        </div>
        }
      
       
        <div className='checkout-box text-white animate__animated animate__fadeInRight'>
              <h2 className='text-2xl mt-5 mb-10 text-white font-bold text-center'>Total Amount</h2>
              <div className='flex justify-between w-3/4 mx-auto mb-5'>
                <p>Product Price :</p>
                { cartItems ? 
                <p>{costs}</p> : ''
                }
              </div>
                <div className='flex justify-between w-3/4 mx-auto pb-5'>
                  <p>Delivery Charge :</p>
                  <p>{delivery ? '130' : ''}</p>
                </div>
              <div className='flex justify-between w-3/4 mx-auto pt-5 checkout-tot'>
                <p>Total :</p>
                { cartItems ? 
                <p>{delivery ? costs + 130 : costs}</p> : ''
                }
                
              </div>
              { cartItems ? 
                <div className='w-3/4 mx-auto pt-5'>
                  <input onClick={()=> setDelivery(false)} name="delivery" value="false" className='mr-2' type="radio" />
                  <label >Pickup From Sust</label><br />
                  <input onClick={()=> setDelivery(true)} name="delivery" value="true" className='mr-2' type="radio" />
                  <label >Online Delivery</label><br />
                </div>
                :
                ''
              }
              
        </div>
      </div>

    </div>
  )
}
