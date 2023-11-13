"use client"
import { usePathname } from 'next/navigation';
import React, {useState, useEffect} from 'react';
import NavLink from '@/components/NavLink';
import "./modulue.background.css"

const Background = ({children}) => {


    let path = usePathname();
    let [data, setData] = useState({})
    const [dashboard, setDashboard] = useState([])
    const [visible, setVisible] = useState(true)

    const {background, dashboardOn, dashboardButtonOn, dashboardButtonOff, dashboardStyle,dashboardStyleOpen,dItem,exact} = data

    useEffect(() =>{
        if (path == "/activities" || path == "/activities/studyCircle" || path ==  "/activities/schoolPrograms") {
            setData({
                background : "blue",
                dashboardOn : true,
                dashboardButtonOn : 'dashboard-blue-on dashboard-button',
                dashboardButtonOff : 'dashboard-blue-off dashboard-button',
                dashboardStyle : "activity-dashboard animate__animated animate__fadeInDown",
                dashboardStyleOpen : "activity-dashboard-on",
                dItem : "d-item-blue",
                exact : "/activities"
            })
            setDashboard([
                {
                    title: 'CAM Talks',
                    href: '/activities'
                },
                {
                    title: 'Study Circle',
                    href: '/activities/studyCircle'
                },
                {
                    title: 'School Programs',
                    href: '/activities/schoolPrograms'
                }
            ])
        }
        else if (path == "/about" || path == "/about/advisors" || path == "/about/executiveCommittee" || path == "/about/contactUs") {
            setData({
                background : "green",
                dashboardOn : true,
                dashboardButtonOn : 'dashboard-green-on dashboard-button',
                dashboardButtonOff : 'dashboard-green-off  dashboard-button',
                dashboardStyle : "about-dashboard animate__animated animate__fadeInDownBig",
                dashboardStyleOpen : "about-dashboard-on",
                dItem : "d-item-green",
                exact : "/about"
            })
            setDashboard([
                {
                    title: 'About Us',
                    href: '/about'
                },
                {
                    title: 'Advisors',
                    href: '/about/advisors'
                },
                {
                    title: 'Executive Committee',
                    href: '/about/executiveCommittee'
                },
                {
                    title: 'Contact Us',
                    href: '/about/contactUs'
                },
            ])
        }
        else if (path == "/blogs" || path == "/blogs/contributeToCamBlogs") {
            setData({
                background : "red",
                dashboardOn : true,
                dashboardButtonOn : 'dashboard-red-on dashboard-button',
                dashboardButtonOff : 'dashboard-red-off  dashboard-button',
                dashboardStyle : "blogs-dashboard  animate__animated animate__fadeInUpBig",
                dashboardStyleOpen : "blogs-dashboard-on ",
                dItem:'d-item-red',
                exact : "/blogs"
            })

            setDashboard([
                {
                    title: 'Blogs',
                    href: '/blogs'
                },
                {
                    title: 'Contribute to CAM Blogs',
                    href: '/blogs/contributeToCamBlogs'
                }
            ])
        }
        else if (path == "/camShop") {
            setData({
                background:"purple",
                dashboardOn : false
            })
        }
        else if (path == "/camLibrary") {
            setData({
                background:"cyan",
                dashboardOn : false
            })
        }
        else {
            setData({
                background:"black",
                dashboardOn : false
            })
          
        }

    },[path])
   

    return (
        <div className={background}>
            <button onClick={() => setVisible(!visible)} className={`${visible ? dashboardButtonOn : dashboardButtonOff} btn-visibility`}><svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" strokeWidth="2" viewBox="0 0 24 24" color="#ffffff"><path stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M3 12h18M3 19h18"></path></svg></button>
            <div className={`${ dashboardOn ? 'dashboard'  : 'noDashboard'}`} >
            <ul className={visible ? dashboardStyle : dashboardStyleOpen}>
                    {
                        dashboard.map(({title, href}) => 
                            <NavLink 
                            onClick={() => setVisible(true)}
                            className={dItem}
                            key={title}
                            href={href}
                            exact={href==exact} 
                            activeClassName="activated" 
                            prefetch
                            >{title}
                            </NavLink>)
                    }
                </ul>
            </div>
            <div className={dashboardOn ? 'lg:ml-72 lg:pt-20' : ''}>
                {children}
            </div>
        </div>
    );
};

export default Background;