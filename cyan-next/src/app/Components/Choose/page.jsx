import React from "react";
import "./choosestyle.css";
import Image from "next/image";

export default function Choose() {
  return (
    <>
      <div className="choose-parent">
        <div className="choose-left">
          <button className="teambtn">Why choose us</button>
          <h1>
            Cyber security skills gap widens as demand for experts continues to
            soar.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
            voluptates natus eum facilis excepturi repudiandae nobis eaque odio
            quis et eveniet iste deserunt impedit rem porro? Quasi fuga aperiam
            quisquam?
          </p>
          
          <div className="choose-num">
            <div className="num-iner">
              <h1>94%</h1>
              <p>Quality services</p>
            </div>
            <div className="num-iner">
              <h1>69%</h1>
              <p>Skilled staff</p>
            </div>
            <div className="num-iner">
              <h1>99%</h1>
              <p>Support team</p>
            </div>
           
          </div>
        </div>

<div className="choose-right">
  <Image alt="imge" src="/computer.png"  height={500} width={ 590} layout="responsive" />
</div>

      </div>
    </>
  );
}
