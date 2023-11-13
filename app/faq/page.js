import FaqElement from '@/components/FaqElement'
import { getFaq } from '@/sanity/sanity-utils'
import React from 'react'
import "animate.css";

export default async function Faq() {
  const faq = await getFaq()
  return (
    <div className="py-20 animate__animated animate__fadeInDown">
        <FaqElement  faq={faq} />
    </div>
    
  )
}
