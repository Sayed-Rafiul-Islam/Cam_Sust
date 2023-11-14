import React from 'react';
import './module.schoolPrograms.css'
import Script from 'next/script';
import { getSchoolPrograms } from '@/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';


const builder = imageUrlBuilder({
  projectId : "f89xy3cs",
  dataset : "production",
  apiVersion : "2023-11-05",
  useCdn : true
})

function urlFor(source) {
  return builder.image(source)
}

const SchoolPrograms = async () => {
    const schoolPrograms = await getSchoolPrograms()
    schoolPrograms.sort(function(a, b) { 
        return b.serial - a.serial
      });

    return (
        <>
            <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>

            <div className='schoolPrograms pb-12'>
                <h1 className='text-5xl text-center font-bold text-white'>School Programs</h1> 
                {
                    schoolPrograms.map(({_id,schoolName,style,text,images})=>
                        <div key={_id} className={style === "normal" ? 'flex slides-wrapper lg:flex-row flex-col-reverse items-center mt-12' : 'flex slides-wrapper lg:flex-row-reverse flex-col-reverse items-center mt-12'}>
                            <p className='text-white font-light lg:w-1/2 w-full lg:mr-8 mr-0 text-justify'>{text}</p>
                            <div className={style === "normal" ? "" : "lg:mr-8 mr-0"}>
                            <swiper-container thumbs-swiper=".mySwipera2" space-between="10" navigation="true"  autoplay-delay="2500">
                                {
                                    images.map((image,index)=>
                                    <swiper-slide key={index}>
                                        <div className='main-image'>
                                            <Image fill alt='slide image' src={urlFor(image).url()} />
                                        </div>
                                    </swiper-slide>
                                    )
                                }
                            </swiper-container>

                        <swiper-container id="sub-swiper" space-between="10" slides-per-view="4" free-mode="true"
                            watch-slides-progress="true">
                                {
                                    images.map((image,index)=>
                                    <swiper-slide key={index}>
                                        <div className='sub-image'>
                                            <Image fill  alt='slide image' src={urlFor(image).url()} />
                                        </div>
                                    </swiper-slide>
                                    )
                                }
                        </swiper-container>
                            </div>
                    </div>
                    )
                }
            </div>
        </>
        
    );
};

export default SchoolPrograms;