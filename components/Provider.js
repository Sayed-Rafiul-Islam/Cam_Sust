"use client"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"





export default function Provider({children}) {
  return (
    <div>
       
      {children}
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
  )
}