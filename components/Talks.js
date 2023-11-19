"use client"
import React from 'react';
import "./module.talk.css";
import PortableText from 'react-portable-text';


const Talks = ({titleColored,titleUnColored,subtitle,details,additionalWords,url}) => {
    return (
        <div className='mt-12 w-5/6 mx-auto pb-8 border-b-2 text-white'>
            <h1 className='text-3xl font-bold text-center'><span className='orange'>{titleColored} </span>{titleUnColored}</h1>
            <i className='mt-2 block text-center font-light'>{subtitle}</i>
            {
                details && 
                <PortableText
                  className='text-justify my-2 font-light'
                  projectId=NEXT_PUBLIC_SANITY_PROJECT_ID
                  dataset='production'
                  content={details}
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
            }
            {
                additionalWords && 
                <PortableText
                  className='text-justify my-2 font-light'
                  projectId=NEXT_PUBLIC_SANITY_PROJECT_ID
                  dataset='production'
                  content={additionalWords}
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
            }       
            <iframe className='video-player mt-4' src={url}></iframe>
            
        </div>
    );
};

export default Talks;