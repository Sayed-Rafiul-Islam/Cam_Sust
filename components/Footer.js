import Link from 'next/link'
import React from 'react'
import './module.footer.css'

export default function Footer() {
  return (
    <div className='lg:w-5/6 w-11/12 footer grid lg:grid-cols-4 grid-cols-2 lg:ml-48 ml-12 my-5'>
        <div className='text-white lg:mb-0 mb-20'>
            <h2 className='mb-6'>What do we do?</h2>
            <Link href={'./activities/schoolPrograms'}>COSMANIA</Link><br/><br/>
            <Link href={'./faq'}>FAQ</Link>
        </div>
        <div className='text-white'>
            <h2 className='mb-6'>Resources</h2>
            <Link href={'./constitution'}>Constitution</Link><br/><br/>
            <Link href={''}>Cam Sust Logo</Link>
        </div>
        <div className='text-white'>
            <h2 className='mb-6'>Contact Us</h2>
            <Link href={'./about'}>About Us</Link><br/><br/>
            <Link href={'./contactUs'}>Contact Us</Link>
        </div>
        <div className='text-white'>
            <h2 className='mb-6'>Follow Us</h2>
            <Link href={'https://twitter.com/camsust'}>Twitter</Link><br/><br/>
            <Link href={'https://www.facebook.com/camsust'}>Facebook</Link><br/><br/>
            <Link href={'./https://www.youtube.com/channel/UCmSA2EgxJtl8GO6PiB-UGXw'}>Youtube</Link>
        </div>

    </div>
  )
}


