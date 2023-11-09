import React from 'react';
import "animate.css"
import './module.camLibrary.css'

const CamLibrary = () => {
    return (
        <div className='animate__animated animate__fadeInLeft h-screen w-screen'>
            <div className='camLibrary'>
                <h1 className='text-5xl pt-20 text-center font-bold text-white'>CAM Library</h1> 
            </div>
        </div>
    );
};

export default CamLibrary;