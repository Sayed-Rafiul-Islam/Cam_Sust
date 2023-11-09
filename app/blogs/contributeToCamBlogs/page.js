import React from 'react';
import "./module.contributeToCam.css"
import Link from 'next/link';


const ContributeToCam = () => {
    return (
        <div className='contributeToCam lg:pb-36 lg:pt-0 pt-12 lg:mx-0 mx-auto'> 
            <h1 className='text-5xl font-bold text-white text-center'>Contribute to CAM blogs</h1> 
            <div className='mx-auto lg:w-3/4 lg:mt-0 mt-4'>
                <h2 className='orange font-bold text-2xl'>Steps :</h2>
                <ul className='orange text-sm font-light'>
                    <li>- Write your blog in <Link className='text-blue-400' href='https://docs.google.com/'>Goolgle Docs</Link></li>
                    <li>- Share the document and give viewer access to <b className='text-base text-blue-400'>gs.camsust@gmail.com</b></li>
                    <li className='my-4'>Or,</li>
                    <li>- Share the document and set General Access to <i className='text-blue-400'>Anyone with the link</i></li>
                    <li>- Copy the link </li>
                </ul>
                <label className='block text-white'>Paste the link below :</label>
                <textarea className='w-full h-24 rounded-lg'></textarea>
                <button className='bg-orange-400 lg:w-1/2 w-full lg:ml-48 py-2 rounded-xl mt-4'>Submit Doc</button>
            </div>
        </div>
    );
};

export default ContributeToCam;