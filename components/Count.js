import React from 'react'
import Counters from './Counters'
import { getCounter } from '@/sanity/sanity-utils'

export default async function Count() {
    const counter = await getCounter()

    counter.sort(function(a, b) { 
      return b.serial - a.serial
    });
  return (
    <Counters counter={counter} />
  )
}
