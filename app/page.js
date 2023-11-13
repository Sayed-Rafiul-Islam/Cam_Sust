import Image from 'next/image'
import "animate.css";
import "./module.home.css"
import rocket from '../image/rocket.png'
import RegularActivities from '@/components/RegularActivities';
import MessegeSection from '@/components/MessegeSection';
import PeopleTalkingAboutUs from '@/components/PeopleTalkingAboutUs';
import Count from '@/components/Count';

export default function Home() {

  return (
    <main className=" animate__animated animate__fadeInLeft flex flex-col lg:ml-32 ml-0">
      <section>
          <Image className='rocket' src={rocket} alt='rocket'/>
          <div className='front'>
              <h2 className='welcome'>Welcome to</h2>
              <h1 className='cam'>CAM-SUST</h1>
              <h1 className='abbr'>Copernicus Astronomical Memorial of SUST</h1>
          </div>
      </section>

      <section className='justify-center'>
          <div className='regular lg:mx-0 mx-auto rounded-lg'>
            <h2 className='text-center text-white text-4xl font-bold pt-5'>Regular Activities</h2>
            <RegularActivities></RegularActivities>
          </div>
      </section>

      <section className='wid-90  lg:mx-0 mx-auto lg:mt-36 mt-12'>
        <MessegeSection></MessegeSection>
      </section>

      <section className='wid-90 lg:mx-0 mx-auto lg:mt-24 mt-12'>
        <Count></Count>
      </section>

      <section className='wid-90 lg:mx-0 mx-auto'>
        <PeopleTalkingAboutUs></PeopleTalkingAboutUs>
      </section>

    </main> 
  )
}


