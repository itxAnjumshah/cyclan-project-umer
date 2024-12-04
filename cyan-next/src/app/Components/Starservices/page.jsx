import React from 'react'
import "./starservice2.css"
import Image from 'next/image'

export default function Starservice2() {
  return (
    <>
    <div className="starservice">
<div className="topstar">
    <div className="startop-left">
        <button className='teambtn'>Our services</button>
        <h1>What we do for your
        Cyber security solutions</h1>
    </div>
    <div className="startop-right">
    <button className="cyan-button">
              Contact with us <span><Image src="/6941884.png" alt="arrow" width={32} height={32} /></span>
            </button>
            </div>

</div>
<div className="bottomstars">
<div className="bottomstar-child">
<Image src="/service4.png" alt='starimg' width={100} height={100} layout='responsive'/>
<h2>Computer Security</h2>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='readmore'>Read more</p>
</div>

{/*  */}

<div className="bottomstar-child">
<Image src="/service5.png" alt='starimg' width={100} height={100} layout='responsive'/>
<h2>File Duplication</h2>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='readmore'>Read more</p>
</div>

{/*  */}

<div className="bottomstar-child" >
<Image src="/service6.png" alt='starimg' width={100} height={100} layout='responsive'/>
<h2>Network Protections</h2>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='readmore'>Read more</p>
</div>

{/*  */}

<div className="bottomstar-child">
<Image src="/service7.png" alt='starimg' width={100} height={100} layout='responsive'/>
<h2>Finger Print Security</h2>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
<p className='readmore'>Read more</p>
</div>

</div>


    </div>
    
    
    
    </>
  )
}
