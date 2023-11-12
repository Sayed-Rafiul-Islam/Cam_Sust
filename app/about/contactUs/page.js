import React from 'react';
import './module.contactUs.css'


const ContactUs = () => {
    return (
        <div className='contactUs animate__animated animate__fadeInLeft'>
            <h1 className='text-5xl text-white font-bold text-center'>Contact Us</h1> 
            <div className='flex mt-10 lg:mx-auto mr-8'>
                <div className='text-white text-center w-1/2'>
                    <h2 className='text-xl lg:text-3xl font-bold'>Call Us</h2>
                    <h3 className='text-lg lg:text-xl'>+8801842267878</h3>
                </div>
                <div className='text-white text-center w-1/2'>
                    <h2 className='text-xl lg:text-3xl font-bold'>Mail Us</h2>
                    <h3 className='text-lg lg:text-xl'>camsust@gmail.com</h3>
                </div>
            </div>
            <div className='lg:w-1/2 lg:mx-auto mt-10'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4355525613464!2d91.82933827488162!3d24.91722804298457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750556002144eab%3A0xe277e14dbca9f2ab!2sShahjalal%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1699825756757!5m2!1sen!2sbd" 
                    className='map'
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default ContactUs;