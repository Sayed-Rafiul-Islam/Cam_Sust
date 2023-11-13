import React from 'react'
import Counters from './Counters'
import { getCounter } from '@/sanity/sanity-utils'

export default async function Count() {
    const counter = await getCounter()

  return (
    <Counters counter={counter} />
  )
}
