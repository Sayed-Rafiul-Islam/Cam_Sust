import React from 'react';
import './module.studyCircle.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import Script from 'next/script';
import { getStudyCircles } from '@/sanity/sanity-utils';    
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

const StudyCircle = async () => {

    const studyCircles = await getStudyCircles()

    studyCircles.sort(function(a, b) { 
        return b.serial - a.serial
      });
    return (
        <>
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
        <div className='studyCircle lg:pt-0 pt-12 lg:mx-0 lg:pr-12 pr-0 mx-auto'>
            <h1 className='text-5xl text-center text-white font-bold'>STUDY CIRCLE</h1> 

                <swiper-container class="mySwiper lg:w-1/2 w-full" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
                slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
                coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true" autoplay-delay="2500">
                {
                    studyCircles[0].images.map((image,index)=>
                    <swiper-slide key={index}>
                        <img  src={urlFor(image).url()} />
                    </swiper-slide>
                    )
                }
            </swiper-container>

            <p className='text-white font-light text-justify w-3/4 mx-auto pb-8'>{studyCircles[0].text}</p>
        </div>
        </>
    );
};

export default StudyCircle;