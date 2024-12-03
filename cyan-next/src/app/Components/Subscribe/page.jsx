import React from 'react';
import "./subscribe.css";

export default function Subscribe() {
  return (
    <>
      <div className="outer-sbc">
        <div className="subsc">
          <h1>Subscribe to our newsletter, We don&apos;t make any spam.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>
          <div className="input-subscribe">
            <input type="text" placeholder="Enter your email Address" />
            <button>Send</button>
          </div>
        </div>   
      </div>
    </>
  );
}
