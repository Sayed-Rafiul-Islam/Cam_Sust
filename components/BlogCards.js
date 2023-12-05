import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from 'react-portable-text'
import Image from 'next/image'
import Link from 'next/link'
import getComments from '@/utils/getComments'

const builder = imageUrlBuilder({
    projectId : "f89xy3cs",
    dataset : "production",
    apiVersion : "2023-11-05",
    useCdn : true
})

function urlFor(source) {
    return builder.image(source)
  }

export default async function BlogCards({blog}) {

    const data = await getComments(blog.slug)
    const comments = data && data.comments;

  return (
    <div key={blog._id}  className='overflow-hidden'>
                <article className='lg:p-4 p-2 my-4 border border-red-500 blog-items'>
                <Link prefetch href={`/blogs/${blog.slug}`}>
                    {blog.poster && (<div className='blog-items-img'>                    
                        <Image fill src={urlFor(blog.poster).url()} alt='cover-image'/>
                        </div>)}            
                </Link>    

                <div className='lg:ml-6 lg:w-1/2 w-full lg:p-0 px-2'>
                        <Link prefetch href={`/blogs/${blog.slug}`} >
                                <h3 className='text-3xl lg:text-left text-center orange font-bold text-white'>
                                    {blog.title}
                                </h3>
                                <p className='text-red-500 lg:text-left text-center'>
                                    {blog.category}
                                </p>
                        </Link>
                        <div className='mx-auto text-justify text-gray-300 line-clamp-6'>
                            <PortableText
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            dataset='production'
                            content={blog.content}
                            serializers={{
                                h1: ({props}) => <h1 className=" text-6xl mt-1" {...props} />,
                                h2: ({props}) => <h2 className=" text-5xl mt-1" {...props} />,
                                h3: ({props}) => <h3 className=" text-4xl mt-1" {...props} />,
                                h4: ({props}) => <h4 className=" text-3xl mt-1" {...props} />,
                                h5: ({props}) => <h5 className=" text-2xl mt-1" {...props} />,
                                h6: ({props}) => <h6 className=" text-xl mt-1" {...props} />,
                                li: ({ children }) => <li className="tex-5xl">{children}</li>,
                                normal: ({ children }) => {
                                if (children.length === 1 && children[0] === '') {
                                    return <br />
                                }
                                return <p className=''>{children}</p>
                                },

                                em : ({children}) => {<i className='inline-block text-center'>{children}</i>}
                                
                            }}
                            
                            
                            />
                        </div>


                        <div className='w-full flex justify-between mt-6'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" color="#ffffff"><path stroke="#a8a5a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7.5 22a5.5 5.5 0 1 0-4.764-2.75l-.461 2.475 2.475-.46A5.474 5.474 0 0 0 7.5 22Z"></path><path stroke="#a8a5a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15.282 17.898A7.946 7.946 0 0 0 18 16.93l3.6.67-.67-3.6A8 8 0 1 0 6.083 8.849"></path></svg>
                               
                                
                                <p className='ml-2 text-white'>{comments?.length} Comments</p>
                            </div>
                            <p className='text-white font-medium '>
                                {new Date(blog._createdAt).toISOString().split("T")[0]}
                            </p>
                        </div>

                </div>
                    
                    
                </article>

            </div>
  )
}
