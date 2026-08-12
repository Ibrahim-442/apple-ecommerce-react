import React from 'react'
import Swap from "./swap/swap"
import Category from './category/Category'
import Arrivals from './arrivals/Arrivals'

export default function Home() {
  return (
    <div>
   <Swap />
   <Category/>
   <Arrivals/>
    </div>
  )
}
