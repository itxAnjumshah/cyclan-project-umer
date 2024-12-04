import Image from 'next/image';
import React from 'react';
import './blog.css';

export default function Blog() {
  return (
    <>
      <div className="blog">
        <div className="blog-top">
          <button className="teambtn">Blog & News</button>
          <h1>See our latest blog and news from us</h1>
        </div>

       
          <div className="outer-bottom-blog">
            <div className="blog-bottom">
              <Image src="/blog1.jpg" alt="blog" width={100} height={100} layout="responsive" />
              <div className="security">
                <p className='blue-p'>Security</p>
                <p>February 15, 2024</p>
              </div>
              <h3>How can you improvement to your business policy for the better product.</h3>
              <p className='detail' >View Details</p>
            </div>
            <div className="blog-bottom">
              <Image src="/blog2.jpg" alt="blog" width={100} height={100} layout="responsive" />
              <div className="security">
                <p className='blue-p'>Security</p>
                <p>February 15, 2024</p>
              </div>
              <h3>How can you improvement to your business policy for the better product.</h3>
              <p className='detail' >View Details</p>
            </div>
            <div className="blog-bottom">
              <Image src="/blog3.jpg" alt="blog" width={100} height={100} layout="responsive" />
              <div className="security">
                <p className='blue-p'>Security</p>
                <p>February 15, 2024</p>
              </div>
              <h3>How can you improvement to your business policy for the better product.</h3>
              <p className='detail' >View Details</p>
            </div>
          </div>
        
      </div>
    </>
  );
}
