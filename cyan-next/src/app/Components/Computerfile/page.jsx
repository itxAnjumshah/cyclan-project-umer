import Image from "next/image";
import React from "react";
import "./computerstyle.css";


export default function Computerfile() {
  return (
    <>
      <div className="computer">
        <div className="computer-child">
          <h3>
            <Image src="/check2.png"   alt="check2"  width={45} height={45}/>
            <span>Computer Security</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
            alias odio distinctio provident 
          </p>
        </div>
        <div className="computer-child">
          <h3>
            <Image src="/check2.png"   alt="check2"  width={45} height={45}/>
            <span>Computer Security</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
            alias odio distinctio provident 
          </p>
        </div>
        <div className="computer-child">
          <h3>
            <Image src="/check2.png"   alt="check2"  width={45} height={45}/>
            <span>Computer Security</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
            alias odio distinctio provident 
          </p>
        </div>
      </div>
    </>
  );
}
