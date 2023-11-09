import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import telescope from "../image/telescope.jpeg"
import bgSmall from "../image/telescope1.jpg"
import Background from '@/components/Background'

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
              <div className='menu'>
                <Navbar>
                </Navbar>
              </div>    

              <div className='area'>
                <Image className='bg bg-s'src={telescope} alt="telescope"/>
                <Image className='bg bg-b' src={bgSmall} alt="small bg"/>
                <Background>
                  {children}
                </Background>
              </div>

              <footer className='w-screen bg-black py-20 footer'>
                      <h1 className='text-center text-xl text-white'>Footer</h1>
              </footer>
        </div> 
      </body>
    </html>
  )
}




