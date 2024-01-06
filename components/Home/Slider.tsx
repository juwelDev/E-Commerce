// import Swiper core and required modules
import {
    A11y,
    Autoplay,
    Navigation,
    Pagination,
   
    
    
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import { baseUrl } from "@/config/appConfig";
  import "swiper/css";
  import "swiper/css/autoplay";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  
  
  
  
  const Slider = () => {
    return (
      
      <Swiper
        className="md:container lg:container container my-2 mx-auto"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay, ]}
        spaceBetween={20}
        slidesPerView={3}
        // navigation
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        //  scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          <h2 className="text-center text-primary pt-5 font-semibold text-3xl uppercase pb-10">
              <b>SStyle</b>
              <br />
              The ultimate reflection of your personality
          </h2>
          <h5 className="text-center ">KC's Fashion is an online shopping destination for men's luxury fashion and lifestyle design. Our edit makes it possible for you to choose from the finest selection of the world’s most sought-after designer brands such as Bottega Veneta, Givenchy, and Burberry. We pride ourselves on creating an easy-to-navigate online shopping platform while maintaining an elevated boutique-like feel.</h5>
        </div>
        <SwiperSlide className="">
          <picture>
            <img
              src={`${baseUrl}/img/slider/1.jpg`}
              className="md:h-70 h-34  w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/2.jpg`}
              className="md:h-70 h-34 w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/3.jpg`}
              className="md:h-70 h-34  w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/4.jpg`}
              className="md:h-70 h-34 w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/5.jpg`}
              className="md:h-70 h-34 w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/6.jpg`}
              className="md:h-70 h-34 w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/7.jpg`}
              className="md:h-70 h-34 w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/8.jpg`}
              className="md:h-70 h-34 w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img
              src={`${baseUrl}/img/slider/9.jpg`}
              className="md:h-70 h-34 w-full"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    );
  };
  export default Slider;