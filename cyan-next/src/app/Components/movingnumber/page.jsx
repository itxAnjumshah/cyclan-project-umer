'use client';
import React, { useState, useEffect } from 'react';
import "./movingstyle.css"

const targetCounts = [34, 99, 183, 571];

function MovingButton() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const titles = [
    "Our Experience",
    "Customer Satisfaction",
    "Our Team Member",
    "Project Complete"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounts(prevCounts => 
        prevCounts.map((count, index) => 
          count < targetCounts[index] ? count + 1 : targetCounts[index]
        )
      );
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="moving">
      {counts.map((count, index) => (
        <div className="mov-in" key={index}>
          <div role="status" aria-live="polite">
            <h1>{count}</h1>
          </div>
          <p>{titles[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default MovingButton;
