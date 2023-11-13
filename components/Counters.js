"use client"
import './module.counters.css'
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'

const Counters = ({counter}) => {

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
      } ,[]);
    
    return (
        <div className='grid grid-cols-2 lg:grid-cols-5'>
            {
              counter.map((counter)=>
              {
                now ? counter.eventCount : 0
                const {number} = useSpring({
                  from : {number : 0},
                  number : counter.eventCount,
                  delay : 200,
                  config : {mass : 1, tension : 20, friction :10}
                })
                return (
                        <div key={counter._id} className='flex flex-col items-center lg:w-full w-full'>
                            <h1 className='count'>
                            <animated.div>
                                {number.to((n)=> n.toFixed(0))}
                            </animated.div>
                            </h1>
                            <h2 className='count-name'>{counter.eventName}</h2>
                          
                        </div>
                )
              }
              )
            }
        </div>
      
    );
};

export default Counters;