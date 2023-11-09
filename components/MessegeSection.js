'use client'
import React from 'react';
import Image from 'next/image';
import astronut from '../image/astronut.png'
import './module.messgeSection.css'
import { useRouter } from 'next/navigation';
const MessegeSection = () => {

    const cardContent = {
        title : 'Wait ! We have a Messege for YOU!',
        paragraph : `We, CAM-SUST have been looking for more ideas to enrich our knowledge of astronomy. We assume this to be helpful if you write about any content from The List or any related one to astronomy that you like. This way we can learn more from each other and build a better understanding of astronomy. So, acknowledging your thirst for 'Astronomy',  we CAM-SUST assume that you will love to share your knowledge with us, young astronomy knowledge seekers, and apprentice more knowledge by exchanging more information among ourselves. We will appreciate any writings relevant to astronomy.`
    }

    const router = useRouter('/')
    return (
        <div className='flex lg:flex-row flex-col lg:items-center justify-center overflow-hidden'>
            <Image
            className='lg:w-1/3 w-1/2 astronut'
            src={astronut}
            alt='astronut'
            />
            <div className='w-full card-2'>
                <h2 className='header-msg text-center lg:text-5xl text-3xl font-bold mb-10'>{cardContent.title}</h2>
                <p className='text-justify font-light text-white'>Dear Astro-lovers,<br/>{cardContent.paragraph}</p>
                    <div className='flex justify-center mt-8'>
                    <button type="button" onClick={() => router.push('/blogs')} className='btn-1'>Writing section</button>
                    <button type="button" onClick={() => router.push('/blogs/contributeToCamBlogs')} className='btn-2'>Our Blogs</button>
                </div>
            </div>  
        </div>
    );
};

export default MessegeSection;