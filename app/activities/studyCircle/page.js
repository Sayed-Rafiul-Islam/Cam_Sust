"use client"
import React from 'react';
import './module.studyCircle.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import Script from 'next/script';

const StudyCircle = () => {
    return (
        <>
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
        <div className='studyCircle lg:pt-0 pt-12 lg:mx-0 lg:pr-12 pr-0 mx-auto'>
            <h1 className='text-5xl text-center text-white font-bold'>STUDY CIRCLE</h1> 

                <swiper-container class="mySwiper lg:w-1/2 w-full" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
                slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
                coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true" autoplay-delay="2500">
                <swiper-slide>
                <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
            </swiper-container>

            <p className='text-white font-light text-justify w-3/4 mx-auto pb-8'>To share knowledge, increase knowledge we arrange study circle frequently. Everyone you will ever meet knows something you do not. That’s why we arrange several study circles per month where we meet each other and discuss certain topics related to astronomy.</p>
        </div>
        </>
    );
};

export default StudyCircle;