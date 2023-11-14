import { getAboutUs } from '@/sanity/sanity-utils';
import './module.about.css'
import PortableText from 'react-portable-text';
const About = async () => {
    const aboutUs = await getAboutUs()
    return (
  
        <div className='aboutUs animate__animated animate__fadeInLeft text-center text-white pb-10'>
            <h1 className='text-5xl lg:pt-0 pt-12 lg:pl-0 pl-10 font-bold '>About Us</h1>    
            <PortableText className='lg:ml-20 ml-12 mt-8 w-5/6 text-justify'
        projectId='f89xy3cs'
        dataset='production'
        content={aboutUs[0].content}
        serializers={{
          h1: ({props}) => <h1 className=" text-6xl mt-1" {...props} />,
          h2: ({props}) => <h2 className=" text-5xl mt-1" {...props} />,
          h3: ({props}) => <h3 className=" text-4xl mt-1" {...props} />,
          h4: ({props}) => <h4 className=" text-3xl mt-1" {...props} />,
          h5: ({props}) => <h5 className=" text-2xl mt-1" {...props} />,
          h6: ({props}) => <h6 className=" text-xl mt-1" {...props} />,
          li: ({ children }) => <li className="tex-5xl">{children}</li>,
          normal: ({ children }) => {
            if (children.length === 1 && children[0] === '') {
              return <br />
            }
            return <p className=''>{children}</p>
          },

          em : ({children}) => {<i className='inline-block text-center'>{children}</i>}
          
        }}
        />
            
        </div>
       
    );
};

export default About;