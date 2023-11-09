import React from 'react';
import "./module.regularActivities.css"

const RegularActivities = () => {

    const activities = [
        {
            imageUrl : '',
            title : "STUDY CIRCLE",
            text : "Share knowledge, Increase knowledge Everyone you will ever meet knows something you do not. That is why we arrange several study circles per month where we meet each other and discuss certain topics related to astronomy."
        },
        {
            imageUrl : '',
            title : "ASTRO-CARNIVAL",
            text : "Learning in a festive way We organize an Astro carnival once a year for all the high school and college students of Sylhet. Their participation in the carnival makes our work worthwhile. Their curious eyes tell the rest."
        },
        {
            imageUrl : '',
            title : "COSMANIA",
            text : "Spread what you know If you have the knowledge, let others light their candles in it. Spreading knowledge in different places will gather new experiences. We organize school programs in different schools throughout the country since we are trying to spread the curiosity to look at the night sky"
        },
        {
            imageUrl : '',
            title : "STAR GAZING",
            text : "Catch a glimpse of the stars We can't look up into the Universe without wondering what's out there. Looking at stars, planets, galaxies, and nebulae and realize that we're just one tiny part of that. Sometimes, we CAM people, gaze into the night sky with a telescope but regularly we do naked eye star gazing."
        },
        {
            imageUrl : '',
            title : "WORLD SPACE WEEK",
            text : "Exploring the universe From 4 th to 10 th October we celebrate 'World Space Week (WSW)' with the whole world through many events. Documentary shows, Seminars and film shows on astronomy are arranged to celebrate this week."
        },
        {
            imageUrl : '',
            title : "SEMINAR",
            text : "We are also the learner. We also organize seminars on various interesting topics and approach the best scholars who will inspire us and enlighten us with their knowledge."
        },
    ]
    return (
        <div className='grid lg:grid-cols-2 grid-col-1 gap-2 mt-6 px-6 pb-6'>
            {
                activities.map(({imageUrl,title,text})=>
                <div className='mx-3 px-4 py-3 lg:mt-0 mt-6 rounded-lg card' key={title}> 
                    <h2 style={{color:"rgb(255, 174, 25)"}} className='text-center mb-3 text-xl font-bold'>{title}</h2>
                    <p className='text-white font-thin text-justify'>{text}</p>
                </div>    
            )
            }
        </div>
    );
};

export default RegularActivities;  