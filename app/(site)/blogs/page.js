import React from 'react'
import "./module.blogs.css"
import { getBlogs } from '@/sanity/sanity-utils'

import BlogCards from '@/components/BlogCards'



 const Blogs = async () => {


    const blogs = await getBlogs()

    
    blogs.sort(function(a, b) {
        return b.serial - a.serial
      });


  return (
    <div className='blogs  animate__animated animate__fadeInLeft'>
    <h1 className='text-5xl font-bold text-white lg:ml-0 ml-16 lg:pt-0 pt-12  text-center'>BLOGS</h1>

    <ul className=' lg:w-3/4 w-full mx-auto'>
        {
        blogs.map( (blog) => (
            <BlogCards key={blog._id} blog={blog} />
        ) )}
       
    </ul>
   
</div>
  )
}

export default Blogs;


