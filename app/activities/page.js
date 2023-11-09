"use client"
import Talks from '@/components/Talks';
import 'animate.css';
import React from 'react'
import "../../components/module.talk.css"



const Activities = () => {

    const contents = [
        {
            title : "APPLICATIONS OF MACHINE LEARNING",
            uncolored : " IN ASTRONOMY",
            subtitle : "",
            detail : "CAM-Talk with Moonzarin Reza was a one of the series CAM-TALK before “SUST Astro Carnival 2023”. Moonzarin Reza is a Visiting Scholar, Fermilab and Graduate Teaching & Research Assistant, Texas A&M University, United States.",
            discussion : "In this talk, Moonzarin Reza discusses about applications of Machine Learning Algorithm in Astronomical data analysis.",
            url : "https://www.youtube.com/watch?v=kOEDG3j1bjs"
        },
        {
            title : "LIVING INSIDE A STELLAR ATMOSPHERE",
            uncolored : " - PAST, PRESENT AND FUTURE",
            subtitle : "",
            detail : "CAM-Talk with Shah Mohammad Bahauddin was a one of the series CAM-TALK before “SUST Astro Carnival 2023”. Shah Mohammad Bahauddin is a researcher at Laboratory of Atmospheric and Space Physics in University of Colorado Boulder.",
            discussion : "In this talk, Shah Mohammad Bahauddin discusses about the outer region of the volume of a Star which lies above the stellar core, radiation zone and convection zon",
            url : "https://www.youtube.com/watch?v=kOEDG3j1bjs"
        },
        {
            title : "ANCIENT STAR CLUSTERS THROUGH",
            uncolored : " JAMES WEBB SPACE TELESCOPE",
            subtitle : "",
            detail : "CAM-Talk with Dr. Lamiya Mowla was a one of the series CAM-TALK before “SUST Astro Carnival 2023”. Dr. Lamiya Mowla is a Dunlap Post-Doctoral Fellow. She is in several extragalactic teams analyzing the early data from the “James Webb Space Telescope”.",
            discussion : "In this talk, Dr. Lamiya Mowla tried to unveil the remarkable world of Ancient Star Clusters, all through the remarkable lens of the James Webb Space Telescope.",
            url : "https://www.youtube.com/watch?v=kOEDG3j1bjs"
        },
        {
            title : "THE PROCESS OF DETECTING",
            uncolored : " LIFE ON REMOTE PLANETS",
            subtitle : "",
            detail : "The third CAM-Talk with Dr. Khan M. B. Asad was a part of the World Space Week celebration. Dr. Khan M. B. Asad is an Assistant Professor in the department of physical science at IUB and did his Ph.D. in Radio Astronomy at the University of Groningen, Netherlands. Currently, he is working mainly in the field of Radio Astronomy and X-Ray in Astronomy.",
            discussion : "In this talk, Dr. Khan M. B. Asad tried to discuss how people tried to define life from time to time, where and how life may be possible, which planets can be our focus of research to find life.",
            url : "https://www.youtube.com/watch?v=kOEDG3j1bjs"
        },
        {
            title : "RESEARCH",
            uncolored : " ETHICS",
            subtitle : "A Discussion of Ethical Perspective of Research With Dr. Yeshim Iqbal.",
            detail : "The third CAM-Talk with Dr. Khan M. B. Asad was a part of the World Space Week celebration. Dr. Khan M. B. Asad is an Assistant Professor in the department of physical science at IUB and did his Ph.D. in Radio Astronomy at the University of Groningen, Netherlands. Currently, he is working mainly in the field of Radio Astronomy and X-Ray in Astronomy.",
            discussion : "In this talk, Dr. Khan M. B. Asad tried to discuss how people tried to define life from time to time, where and how life may be possible, which planets can be our focus of research to find life.",
            enjoy : "Enjoy The Discussion and contribute in the scientific community.",
            url : "https://www.youtube.com/watch?v=kOEDG3j1bjs"
        }
    ]

    return (
        <div className='activities lg:pt-0 pt-12'>
            <div>
                <h1 className='text-center text-5xl text-white font-bold'>CAM TALKS</h1> 
                <p className='text-white w-5/6 font-thin mx-auto mt-6 pb-8 border-b-2 text-justify'>
                Copernicus Astronomical Memorial of SUST (CAM-SUST) is always trying to contribute to society through unique ideas and works. As always, during this pandemic, CAM-SUST is trying to arrange talks on astronomy, research, and volunteering. The philosophy behind this series of talk is to gather and spread knowledge about astronomy and the life experience of those who work in this field. How do they think to solve problems using scientific methods? As some of our members dream to research in astronomy and astrophysics field so we also want to learn the research methodology, research ethics, and different aspects of research fields. another motive of arranging CAM-TALK is to hear from experts in research fields.
                In Bangladesh, there is no single university that teaches astronomy or astrophysics but a lot of organizations tried to spread astronomy all over the country. As we are one of them, we know how many challenges they face. So we will try to share some of those stories through CAM-TALK
                </p>
            </div>
            <div className=''>
                {
                    contents.map(({title,uncolored,subtitle,detail,discussion,enjoy,url}) => 
                        <Talks
                            key={title}
                            title={title}
                            uncolored={uncolored}
                            subtitle={subtitle}
                            detail={detail}
                            discussion={discussion}
                            enjoy={enjoy}
                            url={url}
                        ></Talks>
                    )            
                }
                <div className='mt-12 w-5/6 mx-auto pb-8 text-white flex flex-col'>
                        <h1 className='text-3xl font-bold text-center'><span className='orange'>PROTON CHARGE</span>RADIUS PUZZLE</h1>
                        <i className='mt-2 block text-center font-light'>An unsolved Issue of Contemporary Particle Physics</i>
                        <p className='text-justify my-4 font-light'>This is the first CAM-TALK, with Jaseer Ahmed Sir. He is currently continuing his Ph.D. remotely from the University of Manitoba, Canada, due to joining Shahjalal University of Science and Technology as a lecturer. Besides his research career, he also participates in volunteering activities and supervises a couple of workshops in Canada. In this talk, he shared his struggle and his research activity with us as well as the volunteering experience. How volunteering point of view differs from country to country also came up in this talk.</p>
                        <p className='text-justify my-2 font-light'>In this talk, we discussed the following topics- <br></br>
                                                                        a) Experience in abroad as a student<br></br>
                                                                        b) Proton Charge Radius Puzzle<br></br>
                                                                        c) Skill development tips<br></br>
                                                                        d) Role of a volunteering organization.</p>
                        <p className='text-justify my-2 font-thin'>Enjoy this talk if you are interested in research. You will find some guidelines that will help you with your research work</p>
                        <iframe className='video-player' src="https://www.youtube.com/embed/kOEDG3j1bjs"></iframe>
                        <p className='text-justify my-2 font-thin'>Those who are interested in further study on this topic you can join with us in google classroom. Jaseer Ahmed Sir gives us an opportunity to continue further study on this topic and continue the discussion with him in the google classroom. Feel free to join. </p>
                        <p className='text-justify my-2 font-semibold'>Class Code : 7ft3bls</p>
                        <a className='join-class text-center mx-auto lg:w-1/2 w-full' href='https://classroom.google.com/'><button type="button">Google Classroom</button></a>
                        
                        
                </div>
            </div>
        </div>
        
    );
};

export default Activities;