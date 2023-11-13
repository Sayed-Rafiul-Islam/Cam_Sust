
import FaqElement from '@/components/FaqElement'
import { getFaq } from '@/sanity/sanity-utils'
import React from 'react'

export default async function Faq() {
  const faq = await getFaq()
  return (
    <div className="py-20">
        <FaqElement faq={faq} />
    </div>
    
  )
}
