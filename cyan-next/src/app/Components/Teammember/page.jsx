import Image from "next/image";
import React from "react";
import "./teamstyle.css";

export default function Teammember() {
  return (
    <div className="teammember">
      <div className="teammember-left">
        <button className="teambtn">Our team memeber</button>
        <h1>Our Experts team member for your solution</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          corporis vero amet laboriosam nesciunt illum recusandae eaque
          assumenda in nihil laborum rem, repudiandae explicabo atque enim
          quam voluptatibus ad harum!
        </p>
        <button className="btn">View all Members</button>
      </div>

      <div className="team-right">
        <div className="iner-right-team">
          <Image src="/team1.jpg" alt="team" width={250} height={200}  />
          <h3>Tayer Kader</h3>
          <p>Chiter Gruop</p>
        </div>

        <div className="iner-right-team">
          <Image src="/team2.jpg" alt="team" width={250} height={200}  />
          <h3>William smith</h3>
          <p>brand Designer</p>
        </div>

        <div className="iner-right-team">
          <Image src="/team3.jpg" alt="team" width={250} height={200}  />
          <h3>Kuba Samsu</h3>
          <p>Teka dibe bacchu</p>
        </div>

        <div className="iner-right-team">
          <Image src="/team4.jpg" alt="team" width={250} height={200}  />
          <h3>Biddut Momtaj</h3>
          <p>Raster meye</p>
        </div>
      </div>
    </div>
  );
}
