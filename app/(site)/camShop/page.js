import React from 'react';
import "animate.css";
import './module.camShop.css'
import { getProducts } from '@/sanity/sanity-utils';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';

const builder = imageUrlBuilder({
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset : "production",
    apiVersion : "2023-11-05",
    useCdn : true
})

function urlFor(source) {
    return builder.image(source)
  }

const CamShop = async () => {
    const products = await getProducts();
    products.sort(function(a, b) { 
        return b.serial - a.serial
      });
    return (
        <div className='w-screen animate__animated animate__fadeInLeft'>
            <h1 className='text-5xl pt-20 text-center font-bold text-white'>CAM SHOP</h1>
          
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-10 mx-auto w-3/4 lg:pl-20 pl-0 py-10'>
                {
                    products.map(({_id,name,slug,images,currency,price}) => (   
                            <div className='product-card lg:w-3/4 w-full lg:mx-0 mx-auto text-center text-white rounded-lg' key={_id}>
                                <Link  href={`/camShop/${slug}`}><div className='overflow-hidden product-image mt-5 mx-auto'><Image fill className='mx-auto rounded-b-xl' src={urlFor(images).url()} alt='product-image'/></div></Link>
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