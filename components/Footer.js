import Link from 'next/link'
import React from 'react'
import './module.footer.css'

export default function Footer() {
  return (
    <div className='lg:w-5/6 w-11/12 footer grid lg:grid-cols-4 grid-cols-2 lg:ml-48 ml-12'>
        <div className='text-white lg:mb-0 mb-20'>
            <h2 className='mb-6'>What do we do?</h2>
            <Link prefetch as={'./activities/schoolPrograms'} href={'./activities/schoolPrograms'}>COSMANIA</Link><br/><br/>
            <Link prefetch href={'/faq'}>FAQ</Link>
        </div>
        <div className='text-white'>
            <h2 className='mb-6'>Resources</h2>
            <Link as={'/constitution'}  href={'/constitution'}>Constitution</Link><br/><br/>
            <Link  href={''}>Cam Sust Logo</Link>
        </div>
        <div className='text-white'>
            <h2 className='mb-6'>Contact Us</h2>
            <Link prefetch as={'./about'} href={'./about'}>About Us</Link><br/><br/>
            <Link prefetch as={'./contactUs'} href={'./contactUs'}>Contact Us</Link>
        </div>
        <div className='text-white'>
            <h2 className='mb-6'>Follow Us</h2>
            <Link prefetch as={'https://twitter.com/camsust'} href={'https://twitter.com/camsust'} target='_black'>Twitter</Link><br/><br/>
            <Link prefetch as={'https://www.facebook.com/camsust'} href={'https://www.facebook.com/camsust'} target='_black'>Facebook</Link><br/><br/>
            <Link prefetch as={'https://www.youtube.com/channel/UCmSA2EgxJtl8GO6PiB-UGXw'} href={'https://www.youtube.com/channel/UCmSA2EgxJtl8GO6PiB-UGXw'} target='_black'>Youtube</Link>
        </div>

    </div>
  )
}


