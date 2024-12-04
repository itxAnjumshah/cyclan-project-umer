import React from 'react'
import Pricing from '../Components/Pricing/page'
import Link from 'next/link'

export default function Pricingplan() {
  return (
    <>
<div className="topabout">
<h1>Our pricing</h1>
<h3> <Link href="/"> <span>Home</span></Link>/Our  pricing</h3>

    </div>


<Pricing/>
<br/>
<br/>
<br/>

</>
  )
}
