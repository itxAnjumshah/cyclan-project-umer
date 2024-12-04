import React from "react";
import "./companystyle.css";
import Image from "next/image";

export default function GlassesCompany() {
  return (
    <>
      <div className="company">
        <div className="company-left">
          <Image
            src="/about4.png"
            alt="Company Image"
            width={390}
            height={390}
             layout="responsive"
             className="company-img"
          />
        </div>
        <div className="company-right">
          <button className="teambtn">About our Company</button>
          <h1>
            This is 24/7 Cyber security operation center for your problem
            solution.
          </h1>

          <div className="company-right-inner"> 
            <div className="company-inner">
              <h4>
                <Image
                  src="/check.png"
                  alt="check"
                  width={20}
                  height={20}
                />
                <span>Identifying threats</span>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
            <div className="company-inner">
              <h4>
                <Image
                  src="/check.png"
                  alt="check"
                  width={20}
                  height={20}
                />
                <span>Security management</span>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
