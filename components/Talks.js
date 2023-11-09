"use client"
import React from 'react';
import "./module.talk.css";


const Talks = ({title,uncolored,subtitle,detail,discussion,enjoy,url}) => {
    return (
        <div className='mt-12 w-5/6 mx-auto pb-8 border-b-2 text-white'>
            <h1 className='text-3xl font-bold text-center'><span className='orange'>{title}</span>{uncolored}</h1>
            <i className='mt-2 block text-center font-light'>{subtitle}</i>
            <p className='text-justify my-4 font-light'>{detail}</p>
            <p className='text-justify my-2 font-light'>{discussion}</p>
            <p className='text-justify my-2 font-thin'>{enjoy}</p>
           
            <iframe className='video-player mt-4' src="https://www.youtube.com/embed/kOEDG3j1bjs"></iframe>
            
        </div>
    );
};

export default Talks;