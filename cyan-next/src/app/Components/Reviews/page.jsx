import Image from "next/image";
import "./review.css";

export default function Reviews() {
  return (
    <>
      <div className="parent-review">
        <div className="review-top">
          <button className="review-button teambtn">Top Reviews</button>
          <h1>Take a look at our top Customer feedback</h1>
        </div>
        <div className="review-bottom">
          <div className="review-child">
            <Image src="/quote.png" alt="quote" width={50} height={50} />
            <div className="star">
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              odio ipsam. Atque voluptate veniam eveniet alias, architecto
              eligendi nobis nam reiciendis voluptates dolorem necessitatibus
              aliquam perspiciatis incidunt veritatis dolor obcaecati!
            </p>
            <h4>James Claton</h4>
          </div>
          
          <div className="review-child">
            <Image src="/quote.png" alt="quote" width={50} height={50} />
            <div className="star">
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              odio ipsam. Atque voluptate veniam eveniet alias, architecto
              eligendi nobis nam reiciendis voluptates dolorem necessitatibus
              aliquam perspiciatis incidunt veritatis dolor obcaecati!
            </p>
            <h4>James Claton</h4>
          </div>
          
          <div className="review-child">
            <Image src="/quote.png" alt="quote" width={50} height={50} />
            <div className="star">
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              odio ipsam. Atque voluptate veniam eveniet alias, architecto
              eligendi nobis nam reiciendis voluptates dolorem necessitatibus
              aliquam perspiciatis incidunt veritatis dolor obcaecati!
            </p>
            <h4>James Claton</h4>
          </div>
          
          <div className="review-child">
            <Image src="/quote.png" alt="quote" width={50} height={50} />
            <div className="star">
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
              <Image src="/star.png" alt="star" width={40} height={40} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              odio ipsam. Atque voluptate veniam eveniet alias, architecto
              eligendi nobis nam reiciendis voluptates dolorem necessitatibus
              aliquam perspiciatis incidunt veritatis dolor obcaecati!
            </p>
            <h4>James Claton</h4>
          </div>
        </div>
      </div>
    </>
  );
}
