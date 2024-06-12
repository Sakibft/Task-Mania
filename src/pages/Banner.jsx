import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <div
            className="hero md:min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/cyPDXcV/img2.jpg)",
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-5xl font-bold text-white ">
                  Hello there
                </h1>
                <p className="mb-5 text-2xl text-white">
                  Task-Creators. Select tasks that match your skills and
                  complete them as per the given instructions. Submit your
                  completed tasks for review to earn rewards.
                </p>
                <button className="btn ">Visit Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero md:min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/PrDsp78W/closeup-hands-holding-cash-53876-144221.jpg)",
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-5xl font-bold text-white ">
                  Hello there
                </h1>
                <p className="mb-5 text-2xl text-white">
                  Complete simple tasks and earn coins for your efforts. Get
                  your completed tasks approved by Task-Creators and earn coins
                  as rewards. Accumulate coins and withdraw them as real money.
                  The more tasks you complete, the more you earn!
                </p>
                <button className="btn ">Visit Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero md:min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/c6NtvnL/img1.jpg)",
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-5xl font-bold text-white ">
                  Hello there
                </h1>
                <p className="mb-5 text-2xl text-white">
                  Browse through the available tasks posted by Task-Creators.
                  Select tasks that match your skills and complete them as per
                  the given instructions.
                </p>
                <button className="btn ">Visit Now</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
