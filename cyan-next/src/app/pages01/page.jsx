import React from 'react'
import "../About1/About1.css";
import Latestproject from '../Components/Latestproject/page';
import Link from 'next/link';


export default function Project() {
  return (
    <>
     <div className="topabout">
<h1>Project Details</h1>
<h3> <Link href="/"> <span>Home</span></Link>/Project Details</h3>
    </div>
<Latestproject/>



    </>
  )
}
