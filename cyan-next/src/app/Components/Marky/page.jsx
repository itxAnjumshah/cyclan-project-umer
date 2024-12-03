import React from 'react';
import "./marky.css";

export default function Marky() {
  return (
    <>
      <div className="markycontext">
        <marquee behavior="scroll" direction="left">
          <h4>*Legal Disclaimers*</h4>
          <h4>*Search Functionality*</h4>
          <h4>*Feedback & Reports*</h4>
          <h4>*Access Control List*</h4>
          <h4>*Network Segmentation*</h4>
          <h4>*Other Issues*</h4>
          <h4>*Network Error*</h4>
        </marquee>
      </div>
    </>
  );
}
