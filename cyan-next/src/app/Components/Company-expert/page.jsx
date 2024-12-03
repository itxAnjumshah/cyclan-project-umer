import Image from "next/image";
import React from "react";
import "./expert.css";


export default function Expert() {
  return (
    <>
      <div className="parent-expert">
        <div className="expert-left">
          <button className="teambtn">About our company</button>
          <h1>
            Our experts team are providing a 24/7 technical support and
            services.
          </h1>
          <div className="tickbox">
            <div className="teckbox-inner">
              <Image src="/check.png" alt="tick" height={30} width={30} />
              <p>Secure user access to data and applications system.</p>
            </div>
            <div className="teckbox-inner">
              <Image src="/check.png" alt="tick"  height={30} width={30}  />
              <p> A security-first approach to protect customer workloads.</p>
            </div>
            <div className="teckbox-inner">
              <Image src="/check.png" alt="tick" height={30} width={30}  />
              <p> Extend security and risk mitigation capabilities now.</p>
            </div>
            <div className="teckbox-inner">
              <Image src="/check.png" alt="tick"  height={30} width={30}  />
              <p>Safeguard your most valuable asset—data.</p>
            </div>
          </div>
          <div className="tick-btn">
          <button className="hero-left-btn getser">Get your services</button>
            <button className="cyan-button">
              Contact with us <span><Image src="/6941884.png" alt="arrow" width={32} height={32} /></span>
            </button>
          </div>


        </div>

        <div className="expert-right">
          <p>
            Maximize value with our on-demand, outcome-based, transparent
            vulnerability assessment, automated remediation.
          </p>
          <Image
            src="/about3.png"
            alt="setting-expert"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>


      </div>
    </>
  );
}
