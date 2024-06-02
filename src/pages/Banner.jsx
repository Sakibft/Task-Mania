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
              backgroundImage: "url(https://i.ibb.co/c6NtvnL/img1.jpg)",
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white ">
                  Hello there
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero md:min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/cyPDXcV/img2.jpg)",
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white ">
                  Hello there
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="hero md:min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/c6NtvnL/img1.jpg)'}}>
   
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
       <h1 className="mb-5 text-5xl font-bold text-white ">Hello there</h1>
       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       <button className="btn btn-primary">Get Started</button>
     </div>
   </div>
 </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
