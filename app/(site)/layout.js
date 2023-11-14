import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import telescope from "../../image/telescope.jpeg"
import bgSmall from "../../image/telescope1.jpg"
import Background from '@/components/Background'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


     
   

export const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cam Sust',
  description: 'Astronomical website',
}




export default async function RootLayout({ children}) {


  return (
    <html lang="en">
      <body className={inter.className}>        
        <div className='body-wrapper mx-auto'>



          {/* -------------------------------------------------------- */}
              {/* Header */}
          {/* -------------------------------------------------------- */}
              <div className='menu'>
              
                <Navbar>
                </Navbar>
              </div>    


          {/* -------------------------------------------------------- */}
              {/* body */}
          {/* -------------------------------------------------------- */}
              <div className='area'>
                <Image className='bg bg-s'src={telescope} alt="telescope"/>
                <Image className='bg bg-b' src={bgSmall} alt="small bg"/>
                <Background>
                  {children}
                </Background>
              </div>

            {/* -------------------------------------------------------- */}
              {/* Footer */}
            {/* -------------------------------------------------------- */}

              <footer className='w-screen bg-black py-16 footer'>
                      <Footer/>
              </footer>

              <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              />

      
        </div> 
      </body>
    </html>
  )
}




