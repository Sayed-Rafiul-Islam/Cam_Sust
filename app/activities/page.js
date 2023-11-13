import Talks from '@/components/Talks';
import 'animate.css';
import React from 'react'
import "../../components/module.talk.css"
import { getCamTalks } from '@/sanity/sanity-utils';






const Activities = async () => {
    const camTalks = await getCamTalks()

    return (
        <div className='activities lg:pt-0 pt-12 animate__animated animate__fadeInLeft pb-10'>
            <div>
                <h1 className='text-center text-5xl text-white font-bold'>CAM TALKS</h1> 
                <p className='text-white w-5/6 font-thin mx-auto mt-6 pb-8 border-b-2 text-justify'>
                Copernicus Astronomical Memorial of SUST (CAM-SUST) is always trying to contribute to society through unique ideas and works. As always, during this pandemic, CAM-SUST is trying to arrange talks on astronomy, research, and volunteering. The philosophy behind this series of talk is to gather and spread knowledge about astronomy and the life experience of those who work in this field. How do they think to solve problems using scientific methods? As some of our members dream to research in astronomy and astrophysics field so we also want to learn the research methodology, research ethics, and different aspects of research fields. another motive of arranging CAM-TALK is to hear from experts in research fields.
                In Bangladesh, there is no single university that teaches astronomy or astrophysics but a lot of organizations tried to spread astronomy all over the country. As we are one of them, we know how many challenges they face. So we will try to share some of those stories through CAM-TALK
                </p>
            </div>
            <div className=''>
                {
                    camTalks.map(({titleColored,titleUnColored,subtitle,details,additionalWords,url,_id}) => 
                        <Talks
                            key={_id}
                            titleColored={titleColored}
                            titleUnColored={titleUnColored}
                            subtitle={subtitle}
                            details={details}
                            additionalWords={additionalWords}
                            url={url}
                        ></Talks>
                    )            
                }
            </div>
        </div>
        
    );
};

export default Activities;
