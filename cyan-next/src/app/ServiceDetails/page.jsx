import Link from 'next/link'
import React from 'react'
import "../About1/About1.css"
import Information from '../Components/Information/page'

export default function Serviceinfo() {
  return (
    < >
    <div className="topabout">
<h1>Service Details</h1>
<h3> <Link href="/"> <span>Home</span></Link>/Service Details</h3>

    </div>
<Information/>



    </>
  )
}
