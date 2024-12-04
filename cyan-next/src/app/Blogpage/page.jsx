import React from 'react'
import Blog from '../Components/Blog/page'
import Link from 'next/link'

export default function page() {
  return (
    <>
        <div className="topabout">
<h1>Blog page</h1>
<h3> <Link href="/"> <span>Home</span></Link>/Blog page</h3>

    </div>
        
<Blog/>

        </>
  )
}
