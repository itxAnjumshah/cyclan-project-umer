import React from 'react';
import './pricingstyle.css';
import Image from 'next/image';

export default function Pricing() {
  return (
    <>
      <div className="parent-pricing">
        <div className="top-pricing">
          <button className="teambtn">Pricing Plan</button>
          <h1>Our Best Pricing Plan for<br />Your Solution</h1>
        </div>
        <div className="bottom-pricing-parent">
          <div className="bottom-child">
            <h4>Personal</h4>
            <Image src="/user.png" alt='img' width={100} height={100}/>
            
            <p>5 Websites</p>
            <p>50GB Disk Space</p>
            <p>50 Email Accounts</p>
            <p>50GB Monthly Bandwidth</p>
            <p>10 Subdomains</p>
            <h1>$99<small>/mo</small></h1>
            <button className="btn-pricing">Purchase Now</button>
          </div>

          <div className="bottom-child">
            <h4>Business</h4>
            <Image src="/bussiness.png" alt='img' width={100} height={100}/>
            
            <p>5 Websites</p>
            <p>50GB Disk Space</p>
            <p>50 Email Accounts</p>
            <p>50GB Monthly Bandwidth</p>
            <p>10 Subdomains</p>
            <h1>$199<small>/mo</small></h1>
            <button className="btn-pricing">Purchase Now</button>
          </div>

          <div className="bottom-child">
            <h4>Premium</h4>
            <Image src="/premium.png" alt='img' width={100} height={100}/>
            <p>5 Websites</p>
            <p>50GB Disk Space</p>
            <p>50 Email Accounts</p>
            <p>50GB Monthly Bandwidth</p>
            <p>10 Subdomains</p>
            <h1>$299<small>/mo</small></h1>
            <button className="btn-pricing">Purchase Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
