import React from 'react';
import './module.schoolPrograms.css'
import Script from 'next/script';
import { getSchoolPrograms } from '@/sanity/sanity-utils';
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
                            <swiper-container className="mySwipera"
                            thumbs-swiper=".mySwipera2" space-between="10" navigation="true"  autoplay-delay="2500">
                                {
                                    images.map((image,index)=>
                                    <swiper-slide key={index}>
                                        <img  alt='slide image' src={urlFor(image).url()} />
                                    </swiper-slide>
                                    )
                                }
                            </swiper-container>

                        <swiper-container className="mySwipera2" space-between="10" slides-per-view="4" free-mode="true"
                            watch-slides-progress="true">
                                {
                                    images.map((image,index)=>
                                    <swiper-slide key={index}>
                                        <img  alt='slide image' src={urlFor(image).url()} />
                                    </swiper-slide>
                                    )
                                }
                        </swiper-container>
                            </div>
                    </div>
                    )
                }

                {/* <div className='flex slides-wrapper lg:flex-row flex-col-reverse items-center mt-12'>
                            <p className='text-white font-light lg:w-1/2 w-full lg:mr-8 mr-0 text-justify'>Cosmania is the brand new program launched by CAM-SUST. It is a complete package of knowledge and enjoyment. The word Cosmania means ‘Powerful Symbolism’. And we use this program as a symbol of astronomy spreading event through Astro-presentation, Q&A, problem-solving, paper plane competition, and the most interesting water rocket exhibition with an explanation.</p>
                            <div>
                            <swiper-container className="mySwipera"
                            thumbs-swiper=".mySwipera2" space-between="10" navigation="true"  autoplay-delay="2500">
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </swiper-slide>
                        </swiper-container>

                        <swiper-container className="mySwipera2" space-between="10" slides-per-view="4" free-mode="true"
                            watch-slides-progress="true">
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </swiper-slide>
                        </swiper-container>
                            </div>
                </div>

                <div className='flex slides-wrapper lg:flex-row-reverse flex-col-reverse items-center mt-12'>
                <p className='text-white font-light lg:w-1/2 w-full lg:ml-8 mr-0 text-justify'>The philosophy behind Astro-presentation is to introduce up to date astronomy concepts to school-college level students. Our focus will be on understandable astronomy topics for junior-level like Planets, Exoplanets, Solar system, Galaxy, astronomy observation technique, and lot more interesting topics. Q & A is the extended part of this segment where students can ask their own questions or share their imaginative universe with us. </p>
                    <div>
                    <swiper-container className="mySwiperb"
                    thumbs-swiper=".mySwiperb2" space-between="10" navigation="true"  autoplay-delay="2500">
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </swiper-slide>
                </swiper-container>

                <swiper-container className="mySwiperb2" space-between="10" slides-per-view="4" free-mode="true"
                    watch-slides-progress="true">
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </swiper-slide>
                </swiper-container>
                    </div>
                </div>

                <div className='flex slides-wrapper lg:flex-row flex-col-reverse items-center mt-12'>
                    <p className='text-white font-light lg:w-1/2 w-full lg:mr-8 mr-0 text-justify'>There will be a problem-solving session on the presentation topic. We design this segment in such a way that students can interact with each other. Mainly in our education system, it is rare to see senior-junior interaction in the school-college level or we can say there is no merit exchange among senior-junior. So we set problems for this session where students will solve those problems in a group of three students from three different classes (mainly secondary and higher secondary). The problem will make them think as they have never done before</p>
                    <div>
                    <swiper-container className="mySwiperc"
                    thumbs-swiper=".mySwiperc2" space-between="10" navigation="true"  autoplay-delay="2500">
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </swiper-slide>
                </swiper-container>

                <swiper-container className="mySwiperc2" space-between="10" slides-per-view="4" free-mode="true"
                    watch-slides-progress="true">
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                    <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </swiper-slide>
                </swiper-container>
                    </div>
                </div>

                <div className='flex slides-wrapper lg:flex-row-reverse flex-col-reverse items-center mt-12'>
                <p className='text-white font-light lg:w-1/2 w-full lg:ml-8 mr-0 text-justify'>There will be some interesting game competitions like Paper Plane Competition and Water Rocket exhibition to inspire students in aerodynamics. How a Plane glide, the beauty of Pascal’s law and its application to make water rocket.</p>
                    <div>
                        <swiper-container  className="mySwiper"
                            thumbs-swiper=".mySwiper2" loop="true" space-between="10" navigation="true">
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </swiper-slide>
                        </swiper-container>

                        <swiper-container className="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true"
                            watch-slides-progress="true">
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                            <img alt='slide image'src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </div> */}
            </div>
        </>
        
    );
};

export default SchoolPrograms;