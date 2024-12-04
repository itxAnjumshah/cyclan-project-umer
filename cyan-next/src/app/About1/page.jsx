import React from 'react'
import "./About1.css"

import Expert from '../Components/Company-expert/page'
import Design from '../Components/Design/page'
import Latestproject from '../Components/Latestproject/page'
import Choose from '../Components/Choose/page'
import Reviews from '../Components/Reviews/page'
import Teammember from '../Components/Teammember/page'
import Subscribe from '../Components/Subscribe/page'
import Link from 'next/link'

export default function About1() {
  return (
    <>
    <div className="topabout">
<h1>About Us</h1>
<h3> <Link href="/"> <span>Home</span></Link>/About-us</h3>

    </div>
    <Expert/>
    <Design/>
    <Latestproject/>
    <Choose/>
    <Reviews/>
    <Teammember/>
    <Subscribe/>
    
    
    </>
  )
}
