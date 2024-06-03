import { useState } from "react";
import '@smastrom/react-rating/style.css'
 
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const Testimonail = () => {
  const [reviews, setReview] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
 
  
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 mt-10">
        Testimonial
      </h1>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="border">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center items-center  mx-auto space-y-4 h-96 w-1/2">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.photo_url} />
                  </div>
                
                </div>
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                
                 <h3 className="text-[#CD9003] font-semibold uppercase text-xl mt-4">
                  {review.name}
                </h3>
                <p className="text-center"> {review.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonail;
