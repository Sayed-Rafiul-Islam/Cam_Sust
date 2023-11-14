import React from 'react';
import './module.advisors.css'
import { getAdviers } from '@/sanity/sanity-utils';
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

const Advisors = async () => {
    const allAdvisers = await getAdviers()
    allAdvisers.sort(function(a, b) { 
        return b.serial - a.serial
      });
    const chiefAdvisers = allAdvisers.filter(adviser => adviser.position === "Cheif Adviser") 
    const advisers = allAdvisers.filter(adviser => adviser.position === "Adviser") 
    return (
        <div className='advisors animate__animated animate__fadeInLeft pb-10'>
            <div className='grid grid-cols-1'>
                {
                    chiefAdvisers.map(({_id,name,position,department,image}) =>
                    <div className='mx-auto relative adviser-card rounded-xl my-5' key={_id}>
                        <div className='rounded-xl adviser-img-wrapper'>
                            <div className='adviser-image'>
                                <Image fill src={urlFor(image).url()} alt={name} />
                            </div>
                            <div className='text-white adviser-dept'>
                                <p className=''>{position}</p>
                                <p className=''>{department}</p>
                            </div>
                        </div>
                        <h2 className='text-white text-center text-2xl my-2'>{name}</h2>
                    </div>
                    )
                }
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                {
                    advisers.map(({_id,name,position,department,image}) =>
                    <div className='mx-auto relative adviser-card rounded-xl my-5' key={_id}>
                        <div className='rounded-xl adviser-img-wrapper'>
                            <div className='adviser-image'>
                                <Image fill src={urlFor(image).url()} alt={name} />
                            </div>
                            <div className='text-white adviser-dept'>
                                <p className=''>{position}</p>
                                <p className=''>{department}</p>
                            </div>
                        </div>
                        <h2 className='text-white text-center text-2xl my-2'>{name}</h2>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Advisors;