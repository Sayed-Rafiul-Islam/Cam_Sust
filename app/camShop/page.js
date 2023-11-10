import React from 'react';
import "animate.css";
import './module.camShop.css'
import { getProducts } from '@/sanity/sanity-utils';
import Link from 'next/link';
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

const CamShop = async () => {
    const products = await getProducts();
    return (
        <div className='w-screen animate__animated animate__fadeInLeft'>
            <h1 className='text-5xl pt-20 text-center font-bold text-white'>CAM SHOP</h1>
          
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-10 mx-auto w-5/6 py-10'>
                {
                    products.map(({_id,name,slug,images,currency,price}) => (   
                            <div className='product-card lg:w-3/4 full lg:mx-0 mx-auto text-center text-white rounded-lg' key={_id}>
                                <Link  href={`/camShop/${slug}`}><div className='overflow-hidden mt-5'><img  className='mx-auto rounded-b-xl' width={300} src={urlFor(images).url()}/></div></Link>
                                <Link  href={`/camShop/${slug}`}><h3 className='font-bold mt-3'>{name}</h3>
                                <p className='text-orange-400'>{currency} {price}</p>
                                </Link>
                            </div>
                        
                    ))
                }
                </div>
            
        </div>
    );
};

export default CamShop;