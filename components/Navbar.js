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
                    </ul>   
                </div>  
                </div>
        </div> 
            </div>
    );
};

export default Navbar;