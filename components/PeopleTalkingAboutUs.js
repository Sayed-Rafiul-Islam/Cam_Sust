import React from 'react';
import "./module.peopleTalkingAboutUs.css"
import { getPeopleTalks } from '@/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url'
import PortableText from 'react-portable-text';
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

const PeopleTalkingAboutUs = async () => {
    const peopleTalks = await getPeopleTalks()
    peopleTalks.sort(function(a, b) { 
        return b.serial - a.serial
      });

    return (
        <div className='rounded-xl mt-12 pt-12 px-6 people-card mb-6'>
            <h1 className='text-5xl text-white font-bold text-center lg:mb-12 mb-5'>PEOPLE TALKING ABOUT <span className='orange'>US</span></h1>
            
            {
                peopleTalks.map((peopleTalk,index)=>
                <div key={index} className='flex lg:flex-row flex-col items-center'>
                    <div className='w-3/4 lg:mr-2 mr-2 lg:mb-8 mb-4'>
                        <div className='people-image'>
                            <Image fill className='rounded-full' src={urlFor(peopleTalk.image).url()} alt={peopleTalk.name}/>
                        </div>
                    </div>
                    <div className='lg:ml-20 ml-0'>
                    <PortableText className='text-gray-200 text-justify'
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            dataset='production'
                            content={peopleTalk.words}
                            serializers={{
                            h1: ({props}) => <h1 className=" text-6xl mt-1" {...props} />,
                            h2: ({props}) => <h2 className=" text-5xl mt-1" {...props} />,
                            h3: ({props}) => <h3 className=" text-4xl mt-1" {...props} />,
                            h4: ({props}) => <h4 className=" text-3xl mt-1" {...props} />,
                            h5: ({props}) => <h5 className=" text-2xl mt-1" {...props} />,
                            h6: ({props}) => <h6 className=" text-xl mt-1" {...props} />,
                            normal: ({ children }) => {
                                if (children.length === 1 && children[0] === '') {
                                return <br />
                                }
                                return <p className=''>{children}</p>
                            },

                            em : ({children}) => {<i className='inline-block text-center'>{children}</i>}
                            
                            }}
                            />

                        <h3 className='text-xl orange lg:mt-4 ml-0 mt-6 lg:pb-0 pb-12'>- {peopleTalk.name}</h3>
                    </div>
                </div>
                )
                
            }
            
        </div>
    );
};

export default PeopleTalkingAboutUs;