import React from 'react'
import Marky from '../Components/Marky/page'
import Services from '../Components/services/page'
import Company from '../Components/company/page'
import Latestproject from '../Components/Latestproject/page'
import Choose from '../Components/Choose/page'
import Reviews from '../Components/Reviews/page'
import Teammember from '../Components/Teammember/page'
import MovingButton from '../Components/movingnumber/page'
import Hero from '../Components/Hero/page'
import Expert from '../Components/Company-expert/page'
import Design from '../Components/Design/page'
import Blog from '../Components/Blog/page'

export default function page() {
  return (
    <>

    <Hero/>
     <Marky/> 
{/*  */}
<Expert/>
<Services/>
<Company/>
<Design/>
<Latestproject/>
<Choose/>
<Reviews/>
<Teammember/>
<Blog/>
{/* <MovingButton/> */}
       </>
  )
}
