import React from 'react';
import Image from 'next/image'
import YasmeenMam from "../image/yasmeen_madam.png"
import "./module.peopleTalkingAboutUs.css"

const PeopleTalkingAboutUs = () => {
    const data = {
        talk : '"I am glad to see the students of Shahjalal University of Science and Technology being involved in activities to promote and create interest in science. The Copernicus Astronomical Memorial of SUST is an organization which has been active for several years, to involve the youths of the Sylhet region in creative and scientific activities. I wish CAM-SUST all the best and hope that they will keep up their good work in the future."',
        talker : "- Dr. Yasmeen Haque"
    }
    return (
        <div className='rounded-xl mt-12 pt-12 px-6 people-card mb-6'>
            <h1 className='text-5xl text-white font-bold text-center lg:mb-12 mb-5'>PEOPLE TALKING ABOUT <span className='orange'>US</span></h1>
            <div className='flex lg:flex-row flex-col items-center'>
                <div className='w-3/4 lg:mb-0 mb-4'>
                    <Image className='rounded-full' src={YasmeenMam} alt='Dr. Yasmeen Haque'/>
                </div>
                <div className='lg:ml-20 ml-0'>
                    <p className='text-gray-200 text-justify'>{data.talk}</p>
                    <h3 className='text-xl orange lg:mt-4 ml-0 mt-6 lg:pb-0 pb-12'>{data.talker}</h3>
                </div>
           </div>
            
        </div>
    );
};

export default PeopleTalkingAboutUs;