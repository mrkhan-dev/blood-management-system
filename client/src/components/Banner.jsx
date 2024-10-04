import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../assets/vp-vantaa001.jpg";
import image2 from "../assets/news_210620_00.jpg";
import image3 from "../assets/360_F_606443909_QDiXfc9OkUjlhZYyDV70JDHUpZyzuYED.jpg";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[80vh] w-full mx-auto" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[80vh] w-full" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[80vh] w-full bg-cover" src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
