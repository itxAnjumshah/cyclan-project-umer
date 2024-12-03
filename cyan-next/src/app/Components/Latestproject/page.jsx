import React from "react";
import "./lateststyle.css";
import Image from "next/image";

export default function Latestproject() {
  return (
    <>
      <div className="latest-parnet">
        <div className="latest-top">
          <button className="teambtn">Latest Project</button>
          <h1>We made the latest product for our client</h1>
        </div>
        <div className="latest-bottom">
          <div className="latest-bottom-part">
            <Image src="/1.jpg" alt="1" width={250} height={390} />
            <p className="design-p">Creative</p>
            <h3>Creative solution</h3>
            <p className="iner-child-p">
              view details{" "}
              <span>
                <Image src="/6941884.png" alt="arrow" width={32} height={30} />
              </span>
            </p>
          </div>
          <div className="latest-bottom-part">
            <Image src="/2.jpg" alt="1" width={525} height={100} />
            <p className="design-p">Programming</p>
            <h3>Programming & AI</h3>
            <p className="iner-child-p">
              view details{" "}
              <span>
                <Image src="/6941884.png" alt="arrow" width={32} height={30} />
              </span>
            </p>
          </div>

          <div className="latest-bottom-part">
            <Image
              src="/3.jpg"
              alt="1"
              width={250} height={390}
              
            />
            <p className="design-p">Cyber</p>
            <h3>Computer security</h3>
            <p className="iner-child-p">
              view details{" "}
              <span>
                <Image src="/6941884.png" alt="arrow" width={32} height={30} />
              </span>
            </p>
          </div>
          <div className="latest-bottom-part">
            <Image
              src="/4.jpg"
              alt="1"
              width={525} height={100}
              
            />
            <p className="design-p">Solution</p>
            <h3>On Board Project</h3>
            <p className="iner-child-p">
              view details{" "}
              <span>
                <Image src="/6941884.png" alt="arrow" width={32} height={30} />
              </span>
            </p>
          </div>
          <div className="latest-bottom-part">
            <Image
              src="/5.jpg"
              alt="1"
              width={250} height={390}
              
            />
            <p className="design-p">Cyber</p>
            <h3>Computer Security</h3>
            <p className="iner-child-p">
              view details{" "}
              <span>
                <Image src="/6941884.png" alt="arrow" width={32} height={30} />
              </span>
            </p>
          </div>
          <div className="latest-bottom-part">
            <Image
              src="/6.jpg"
              alt="1"
              width={250} height={390}
              
            />
            <p className="design-p">Protection</p>
            <h3>Family Security</h3>
            <p className="iner-child-p">
              view details{" "}
              <span>
                <Image src="/6941884.png" alt="arrow" width={32} height={30} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
