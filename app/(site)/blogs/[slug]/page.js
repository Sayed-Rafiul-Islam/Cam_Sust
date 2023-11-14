import imageUrlBuilder from '@sanity/image-url'
import { getBlog } from '@/sanity/sanity-utils';
import PortableText from 'react-portable-text';
import './module.blog.css'
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




export default async function SlugPage ({params}) {

    const blog = await getBlog(params.slug)

    return (
        <div className="blog-body mx-auto lg:px-20 lg:pt-20 lg:pb-12 px-2 py-6">m
                <h1 className="lg:text-6xl text-3xl font-bold text-center">{blog.title}</h1>
               <div className='cover mx-auto'><Image className='rounded-xl' fill src={urlFor(blog.poster).url()} alt='cover image' /></div>
                <div className='flex lg:text-base text-xs justify-between lg:px-12 px-2 lg:pb-6 pb-2 lg:my-4 orange border-b border-b-red-500'>
                  <p>{blog.author}</p>
                  <p>{blog.category}</p>
                  <p>{new Date(blog._createdAt).toISOString().split("T")[0]}</p>
                </div>

                <div className='mx-auto text-justify text-gray-200 content lg:mt-12 mt-6'>
                  <PortableText
                  projectId='f89xy3cs'
                  dataset='production'
                  content={blog.content}
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

                    i : ({children}) => {<i className=' text-center'>{children}</i>}
                    
                  }}
                  
                  
                  />
                </div>
        </div>

        


    )
}
