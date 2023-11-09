"use client"
import StudyCircles from './counter/StudyCircles';
import Cosmanias from './counter/Cosmanias';
import AstroCarnivals from './counter/AstroCarnivals';
import WorldSpaceWeeks from './counter/WorldSpaceWeeks';
import StarGazings from './counter/StarGazings';
import './module.counters.css'
import { useState, useEffect } from 'react';

const Counters = () => {

      const [now, setNow] = useState(false)


    const start = () => {
      if (window.scrollY > 1450) {
        setNow(true)
      }
      else {
        setNow(false)
      }
    }

      useEffect(() => {
        window.addEventListener('scroll', start)
      } ,[now]);


      


      const studyCircles = now ? 66 : 0;
      const starGazibgs = now ? 27 : 0;
      const cosmanias = now ? 17 : 0;
      const astroCarnivals = now ? 4 : 0;
      const worldSpaceWeeks = now ? 5 : 0;
    
    return (
        <div className='lg:flex lg:justify-between grid grid-cols-2'>
          <div className='flex flex-col items-center lg:w-full w-full'>
            <h1 className='count'>
              <StudyCircles
              n = {studyCircles}
              ></StudyCircles>
            </h1>
            <h2 className='count-name'>Study Circles</h2>
            
          </div>

          
          <div className='flex flex-col items-center lg:w-full w-full'>
            <h1 className='count'>
              <StarGazings
              n = {starGazibgs}
              ></StarGazings>
            </h1>
            <h2 className='count-name'>Star Gazing</h2>
            
          </div>
      
          <div className='flex flex-col items-center lg:w-full w-full'>
            <h1 className='count'>
              <Cosmanias
              n = {cosmanias}
              ></Cosmanias>
            </h1>
            <h2 className='count-name'>Cosmania</h2>
            
          </div>

          <div className='flex flex-col items-center lg:w-full w-full'>
            <h1 className='count'>
              <AstroCarnivals
              n = {astroCarnivals}
              ></AstroCarnivals>
            </h1>
      
            <h2 className='count-name'>Astro Carnival</h2>
          </div>
          
          
          <div className='lg:flex lg:flex-col col-span-2 text-center items-center lg:w-full w-full'>
            <h1 className='count'>
              <WorldSpaceWeeks
              n = {worldSpaceWeeks}
              ></WorldSpaceWeeks>
            </h1>
            <h2 className='count-name'>World Space Week</h2>
          </div>
          

          
        </div>
      
    );
};

export default Counters;