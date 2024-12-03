// HomeDisplay.jsx
"use client";
import { useState } from 'react';
import Videoplayer from '../video-playey/page.jsx';
import Image from 'next/image';
import "./styleh.css";
import Subscribe from '../Subscribe/page.jsx';
import Teammember from '../Teammember/page.jsx';
import Movingbutton from '../movingnumber/page.jsx';
import Company from '../company/page.jsx';
import Services from '../services/page.jsx';
import Marky from '../Marky/page.jsx';
import Trustcompany from '../Trustcompany/page.jsx';
import Pricing from '../Pricing/page.jsx';
import Reviews from '../Reviews/page.jsx';
import Choose from '../Choose/page.jsx';
import Latestproject from '../Latestproject/page.jsx';


export default function HomeDisplay() {
  const [playState, setPlayState] = useState(false);

  const togglePlayState = () => {
    setPlayState((prevState) => !prevState);
  };

  return (
    <>
      <div className="outer-text-parent">
        <div className="innertext">
          <h1>We are the best cybersecurity problem-solving team</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. QuidemEarum cupiditate.</p>
        </div>
        <div className="logo-hero">
          <button className="btn left">Discover more</button>
          <div className="inner-right">
            <Image src="/527995.png" alt="logo" onClick={togglePlayState} height={50} width={50} className='play-icon' />
            <span>Video Tour</span>
          </div>
        </div>
      </div>

      <Videoplayer playState={playState} setPlayState={setPlayState} />
<Movingbutton/>

<Company/>

<Services/>

<Marky/>

<Trustcompany/>
<Latestproject/>

<Choose/>

<Pricing/>

<Reviews/>
      <Teammember/>

      <Subscribe/>
    </>
  );
}
