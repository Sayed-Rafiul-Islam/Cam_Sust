export const metadata = {
  title: 'Cam Sust',
  description: 'Astronomical website',
}




export default async function RootLayout({ children}) {


  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}




