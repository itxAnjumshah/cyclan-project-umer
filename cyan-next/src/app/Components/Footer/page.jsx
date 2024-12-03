import React from "react";
import "./ftstyle.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container1">
          {/* Corrected width and height to maintain consistent dimensions */}
          <Image
            src="/logo-footer.png"
            alt="footer-logo"
            width={100}
            height={50}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            possimus explicabo eveniet ullam accusantium tempore minima totam
          </p>

          <div className="iner-footer-logo">
            <Image src="/733579.png" alt="social-icon" width={50} height={50} />
            <Image src="/3536505.png" alt="social-icon" width={50} height={50} />
            <Image src="/3955024.png" alt="social-icon" width={50} height={50} />
            <Image src="/facebook.png" alt="social-icon" width={50} height={50} />
          </div>
        </div>
        
        <div className="footer-container-2">
          <h1>About Company</h1>
          <div className="footer-ul">
            <p>About us</p>
            <p>Blog & News</p>
            <p>Our Portfolio</p>
            <p>Pricing Plan</p>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="footer-container-3">
          <h1>Our Services</h1>
          <div className="footer-ul">
            <p>Network Protection</p>
            <p>Computer Security</p>
            <p>Cyber Solutions</p>
            <p>Locker Security</p>
            <p>Code Inspection</p>
            <p>Folder Duplication</p>
          </div>
        </div>

        <div className="footer-container-4">
          <h1>Download App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            dolorem nihil beatae rem non quas repellat sed cumque, repudiandae
          </p>
          <div className="download">
            <Image src="/app.png" alt="download-app" width={250} height={100} />
            <Image src="/play1.png" alt="download-playstore" width={250} height={100} />
          </div>
        </div>
      </div>
      
      <hr className="footer-hr" />
      
      <div className="copyright">
        <p>© 2024. All Rights Reserved</p>
        <div className="right-copy">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
