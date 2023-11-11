"use client"
import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import './module.product.css'
import { toast } from 'react-toastify'
import imageUrlBuilder from '@sanity/image-url'
import cartData from '@/utils/cartData'



const builder = imageUrlBuilder({
  projectId : "f89xy3cs",
  dataset : "production",
  apiVersion : "2023-11-05",
  useCdn : true
})

function urlFor(source) {
  return builder.image(source)
}



export default function Product({product}) {
    const [selectedSize, setSelectedSize] = useState('')
    const {name, images, currency, slug,colors,sizes, categories, price, _id, details, sku} = product
    const [selectedImage, setSelectedImage] = useState(0)

    const cartHandler = () => {
      if (selectedSize === '') {
        toast.error("Please select a size first !")
      }
      else {
        const item ={
          _id : _id,
          name : name,
          size : selectedSize,
          price : price     
      }

      cartData(item)
      toast.success(`${name} of ${selectedSize} has been added to the Cart`)

          
      }
  }

  return (
    <div className='product mt-24 mx-auto flex items-center'>
        <div className='w-1/2'>
          <img className='w-2/3 mx-auto rounded-xl' src={urlFor(images[selectedImage]).url()} alt='Product Showcasing Image'  />
              <div className='flex mt-4 ml-28'>
              { 
                images.map((image,index)=>(
                <div 
                key={index}
                onClick={()=> setSelectedImage(index)}
                className='mr-2'
                >
                      <img className={index == selectedImage ? "border border-orange-600 rounded-lg product-img" : "rounded-lg product-img"}  src={urlFor(image).url()} alt='Product images' />
                  </div>
                ))
              }
            </div>
        </div>
      <div className='text-white pr-20 w-1/2'>
        <h1 className='mb-4 text-3xl font-bold'>{name}</h1>
        <p className='text-orange-400 font-bold'>Description :</p>
        <PortableText className='text-sm'
        projectId='f89xy3cs'
        dataset='production'
        content={details}
        serializers={{
          h1: ({props}) => <h1 className=" text-6xl mt-1" {...props} />,
          h2: ({props}) => <h2 className=" text-5xl mt-1" {...props} />,
          h3: ({props}) => <h3 className=" text-4xl mt-1" {...props} />,
          h4: ({props}) => <h4 className=" text-3xl mt-1" {...props} />,
          h5: ({props}) => <h5 className=" text-2xl mt-1" {...props} />,
          h6: ({props}) => <h6 className=" text-xl mt-1" {...props} />,
          li: ({ children }) => <li className="tex-5xl">{children}</li>,
          normal: ({ children }) => {
            if (children.length === 1 && children[0] === '') {
              return <br />
            }
            return <p className=''>{children}</p>
          },

          em : ({children}) => {<i className='inline-block text-center'>{children}</i>}
          
        }}
        />
        <h2 className='my-2 text-orange-400'><b>Price :</b> <span className='text-white'>{currency} {price}</span></h2>
        <p className='my-2 text-white'><b className='text-orange-400'>Select Size : </b>{selectedSize}</p>
        {
          sizes.map((size,index)=>(
            <button key={index} className={size === selectedSize ? "selected-size" : "size-btn"} onClick={() => setSelectedSize(size)}>{size}</button>
          ))
        }
        <br />
        <button onClick={() => cartHandler()} className='addToCart-btn'>Add to Cart</button>
        <a className='text-white text-xl bg-gray-500' href='./cart' >Go to Cart</a>
      </div>
    </div>
  )
}
