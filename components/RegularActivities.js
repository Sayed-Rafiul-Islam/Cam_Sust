import React from 'react';
import "./module.regularActivities.css"
import { getRegularActivities } from '@/sanity/sanity-utils';

const RegularActivities = async () => {

    const regularActivities = await getRegularActivities()
    regularActivities.sort(function(a, b) { 
        return b.serial - a.serial
      });

    return (
        <div className='grid lg:grid-cols-2 grid-col-1 gap-2 mt-6 px-6 pb-6'>
            {
                regularActivities.map(({_id,icon,name,activity})=>
                <div className='mx-3 px-4 py-3 lg:mt-0 mt-6 rounded-lg card' key={_id}> 
                    <img src={icon} />
                    <h2 style={{color:"rgb(255, 174, 25)"}} className='text-center mb-3 text-xl font-bold'>{name}</h2>
                    <p className='text-white font-thin text-justify'>{activity}</p>
                </div>    
            )
            }
        </div>
    );
};

export default RegularActivities;  