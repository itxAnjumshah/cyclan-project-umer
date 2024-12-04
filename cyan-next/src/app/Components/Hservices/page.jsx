import Image from 'next/image'
import React from 'react'
import "./Hservice.css";
import Link from 'next/link';
import "../../About1/About1.css"



export default function Hservices() {
  return (
    <>
<div className="topabout">
<h1>Services</h1>
<h3> <Link href="/"> <span>Home</span></Link>/Services</h3>
    </div>



       <div className="herservices">
        
<div className="herservices-child">
<Image src="/service1.png"  alt='hervice' width={100} height={100} layout='responsive'/>
<h3>Malware Protection</h3>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='read-details'>Read more</p>
</div>
{/*  */}
<div className="herservices-child">
<Image src="/service2.png"  alt='hervice' width={100} height={100} layout='responsive'/>
<h3>Server Protection</h3>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='read-details'>Read more</p>
</div>
{/*  */}
<div className="herservices-child">
<Image src="/service3.png"  alt='hervice' width={100} height={100} layout='responsive'/>
<h3>Computer Security</h3>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='read-details'>Read more</p>
</div>
{/* 
 */}
<div className="herservices-child">
<Image src="/service8.png"  alt='hervice' width={100} height={100} layout='responsive'/>
<h3>Malware Protection</h3>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='read-details'>Read more</p>
</div>
{/*  */}
<div className="herservices-child">
<Image src="/service9.png"  alt='hervice' width={100} height={100} layout='responsive'/>
<h3>Server Protection</h3>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='read-details'>Read more</p>
</div>
{/*  */}
<div className="herservices-child">
<Image src="/service10.png"  alt='hervice' width={100} height={100} layout='responsive'/>
<h3>Computer Security</h3>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='read-details'>Read more</p>
</div>


       </div>

        
</>
  )
}
