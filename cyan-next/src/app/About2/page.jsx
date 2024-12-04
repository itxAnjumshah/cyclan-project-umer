import React from 'react'
import Teammember from '../Components/Teammember/page'
import Pricing from '../Components/Pricing/page'
import Reviews from '../Components/Reviews/page'
import Blog from '../Components/Blog/page'
import Link from 'next/link'
import "../About1/About1.css"
import GlassesCompany from '../Components/glassecompany/page'

export default function About2() {
  return (
    <>

<div className="topabout">
<h1>About Us Two</h1>
<h3> <Link href="/"> <span>Home</span></Link>/About-us Two</h3>

    </div>

<GlassesCompany/>
     <Teammember/> 
     <Pricing/>
     <Reviews/>
     <Blog/>
      
      
      
      
      </>
  )
}
