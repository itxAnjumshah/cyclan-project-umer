import Image from "next/image";
import React from "react";
import "./information.css";

export default function Information() {
  return (
    <>
      <div className="information">
      <Image src="/blog3.jpg" alt="service" width={100} height={100} layout="responsive" />
        <h2>Business Analysis And Solution Program</h2>
        <p>
          The difference between short-form and long-form videos is simple:
          short-form videos are short, and long-form videos are long. To be more
          specific, short-form videos are typically under 10 minutes long, while
          long-form videos exceed that 10-minute mark. You’ll see a lot of
          short-form videos on social media. Target, for example, uses this
          video format on Instagram to advertise its products.
        </p>
      
        
        <p>
          Youll typically see longer videos on a businesss website or YouTube.
          Video and podcast hosting provider, Wistia, uses long-form video to
          educate its audience about the cost of video production.
        </p>

        <Image src="/service2.png" alt="service" width={100} height={100} layout="responsive" />
        <h2>Service Benefits</h2>
        <p>
          Content is king in the digital world. Agencies produce high-quality
          content, including blog posts, videos, infographics, and more, to
          engage and educate the target audience. Content marketing builds trust
          and authority for the brand. Agencies manage and grow a brand's
          presence on social media platforms such as Facebook, Twitter,
          LinkedIn, and Instagram.
        </p>

      
        
        <h2>Low Cost Our Fee</h2>
        <p>
          Content is king in the digital world. Agencies produce high-quality
          content, including blog posts, videos, infographics, and more, to
          engage and educate the target audience. Content marketing builds trust
          and authority for the brand. Agencies manage and grow a brand's
          presence on social media platforms such as Facebook, Twitter,
          LinkedIn, and Instagram.
        </p>



        <h2>Tips & tricks</h2>
        <p>
          Content is king in the digital world. Agencies produce high-quality
          content, including blog posts, videos, infographics, and more, to
          engage and educate the target audience. Content marketing builds trust
          and authority for the brand. Agencies manage and grow a brand's
          presence on social media platforms such as Facebook, Twitter,
          LinkedIn, and Instagram.
        </p>
      </div>
    </>
  );
}
