'use client'
import React, { useEffect, useState } from 'react';
import logo from '../image/cam_white.png'
import Image from "next/image"
import './module.navbar.css'
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const [visible, setVisible] = useState(true)



    const changeBackground = () => {
        if (window.scrollY > 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }

    }

    
    
const menu = [
    {
    title: 'Home',
    href: '/'
    },
    {
    title: 'Activities',
    href: '/activities'
    },
    {
    title: 'Blogs',
    href: '/blogs'
    },
    {
    title: 'CAM-Library',
    href: '/camLibrary'
    },
    {
    title: 'CAM-Shop',
    href: '/camShop'},
    {
    title: 'About',
    href: '/about',
    }
]

useEffect(() => window.addEventListener('scroll', changeBackground), []);


    return (
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <button onClick={() => setVisible(!visible)} className={visible ? 'menu-button menu-1 w-12 h-12 bg-black rounded-br-3xl' : 'menu-button menu-2'}><svg className={visible ? 'm-auto' : 'mx-auto'} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" strokeWidth="2" viewBox="0 0 24 24" color="#ffffff"><path stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M3 12h18M3 19h18"></path></svg></button>
                <div className='lg:w-3/4 w-full mx-auto'>
                <div className={visible ? 'flex justify-between items-center menubar-1 animate__animated animate__fadeInTop' : 'flex justify-between items-center menubar-2 animate__animated animate__fadeInDown'}>
                <div className='logo'>
                <Link className='camlogo' href="./">
                    <Image src={logo} alt="logo" />
                </Link>
                </div>   
                <div> 
                    <ul className=''>
                    
                    {
                        menu.map(({title, href}) => 
                            <NavLink
                            onClick={() => setVisible(true)}  
                            className='p-4 text-white navItem' 
                            key={title} exact={href=='/'} 
                            activeClassName='activated' 
                            href={href}>
                                {title}
                            </NavLink>
                        )
                    }
                    <Link onClick={()=>setVisible(true)} className={visible ? 'cart-ico-1 my-auto cart-ico' : 'cart-ico-2  my-auto cart-ico' } href='/camShop/cart' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                    </Link> 
                    </ul>   
                </div> 
                
                </div>
        </div> 
            </div>
    );
};

export default Navbar;


