import Image from "next/image";
import "./herostyle.css";

export default function Hero() {
  return (
    <>
      <div className="hero-parent">
        <div className="hero-left">
          <h1>
            Rising Cybersecurity Threats Highlight Need for Vigilance
          </h1>
          <div className="hero-btn">
            <button className="hero-left-btn">Get your services</button>
            <button className="cyan-button">
              Contact with us <span><Image src="/6941884.png" alt="arrow" width={32} height={32} /></span>
            </button>
          </div>
        </div>
        <div className="hero-right">
          <Image src="/home-img2.png" alt="HOME" width={500} height={600} layout="responsive" />
        </div>
      </div>
    </>
  );
}
