import React from 'react'
import Pricing from '../Components/Pricing/page'

import Choose from '../Components/Choose/page'
import Teammember from '../Components/Teammember/page'
import Blog from '../Components/Blog/page'
import Starhero from '../Components/Starhero/page'
import Reviews from '../Components/Reviews/page'
import Computerfile from '../Components/Computerfile/page'

export default function page() {
  return (
    <>
    <Starhero/>
    <Computerfile/>
    
    
    <Pricing/>
<Reviews/>
<Choose/>
<Teammember/>
<Blog/>
    
    
    </>
  )
}
