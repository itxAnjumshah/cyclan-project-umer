import Image from 'next/image'

import "./star.css";


export default function Starhero() {
  return (
    <>
<div className="starhero3">
    <div className="star-left">
        <h1>We're Providing The Best Cyber Solutions For Your Security.</h1>
        <div className="hero-btn">
            <button className="hero-left-btn">Get your services</button>
            <button className="cyan-button">
              Contact with us <span><Image src="/6941884.png" alt="arrow" width={32} height={32} /></span>
            </button>
          </div>

    </div>
    
    
    <div className="star-right">
<Image src="/home-img3.png" alt='star-img' width={100} height={100} layout='responsive'/>

    </div>
    
    </div>    
    

    
    
    
    </>
  )
}
