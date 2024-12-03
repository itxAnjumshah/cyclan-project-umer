import Image from "next/image";
import React from "react";
import "./servicestyle.css";

export default function Services() {
  return (
    <>
      <div className="service-top">
        <div className="service-top-child">
          <button className="teambtn">Our Service</button>
          <h1>
            What we do for your
            <br />
            Cyber security solutions
          </h1>
        </div>
        <div className="service-top-child2">
          <button>
            view all services
            <span>
              <Image src="/6941884.png" alt="arrow" width={32} height={32} />
            </span>
          </button>
        </div>
      </div>

      <div className="service-bottom">
        <div className="service-bottom-child">
          <Image src="/service1.png" alt="service" width={350} height={300} layout="responsive" />
          <h2>Malware Protection</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor.
          </p>
          <h4>
            Read more{" "}
            <span>
              <Image src="/6941884.png" alt="arrow" width={32} height={32} />
            </span>
          </h4>
        </div>
        <div className="service-bottom-child">
          <Image src="/service2.png" alt="service" width={350} height={300} layout="responsive" />
          <h2>Server Protection</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor.
          </p>
          <h4>
            Read more{" "}
            <span>
              <Image src="/6941884.png" alt="arrow" width={32} height={32} />
            </span>
          </h4>
        </div>
        <div className="service-bottom-child">
          <Image src="/service3.png" alt="service" width={350} height={300} layout="responsive" />
          <h2>Computer Security</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor.
          </p>
          <h4>
            Read more{" "}
            <span>
              <Image src="/6941884.png" alt="arrow" width={32} height={32} />
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}
