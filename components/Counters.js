"use client"
import CounterOn from './CounterOn';
import './module.counters.css'
import { useState, useEffect } from 'react';


const Counters = ({counter}) => {

      const [now, setNow] = useState(false)
      console.log(now)


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
    
    return (
        <div className='grid grid-cols-2 lg:grid-cols-5'>
            {
              counter.map((counter)=>
              {
                const count = now ? counter.eventCount : 0
                return (
                        <div key={counter._id} className='flex flex-col items-center lg:w-full w-full'>
                            <h1 className='count'>
                              <CounterOn n={count} />
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