import React from 'react';
import './module.executiveCommittee.css'
import { getCommittees } from '@/sanity/sanity-utils';

const executiveCommittee = async () => {
    const committees = await getCommittees()
    console.log(committees)
    return (
        <div className='executiveCommittee animate__animated animate__fadeInLeft'>
            <h1 className='text-5xl font-bold text-white text-center'>Executive Committee</h1> 
        </div>
    );
};

export default executiveCommittee;