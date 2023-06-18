import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  return (
    <div className="m-5">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper m-10   "
      >
        <SwiperSlide>
          <div className=" border  p-5  bg-white rounded-lg shadow-lg  flex flex-col md:flex-row justify-center gap-5 items-center">
            <div className="w-1/2 h-auto bg-cover pt-20  ">
              <img
                className="rounded-full h-36 w-36"
                src="./assests/person1.jpg"
                alt=""
              />
            </div>
            <div className="w-100 h-auto p-5  rounded-xl flex flex-col justify-center items-center ">
              <h1
                className="text-lg font-bold mb-2
              "
              >
                Alumni Testimonials
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                vitae, laboriosam odit eum ullam ducimus et quas magnam sunt
                corrupti est illo possimus, laudantium cum ipsa dolorem eos
                repudiandae! Dignissimos.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border  p-5  bg-white rounded-lg shadow-lg  flex flex-col md:flex-row justify-center gap-5 items-center">
            <div className="w-1/2 h-auto bg-cover pt-20  ">
              <img
                className="rounded-full h-32 w-32"
                src="./assests/person2.jpg"
                alt=""
              />
            </div>
            <div className="w-100 h-auto p-5  rounded-xl flex flex-col justify-center items-center ">
              <h1
                className="text-lg font-bold mb-2
              "
              >
                Alumni Testimonial
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                vitae, laboriosam odit eum ullam ducimus et quas magnam sunt
                corrupti est illo possimus, laudantium cum ipsa dolorem eos
                repudiandae! Dignissimos.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border  p-5  bg-white rounded-lg shadow-lg  flex flex-col md:flex-row justify-center gap-5 items-center">
            <div className="w-1/2 h-auto bg-cover pt-20  ">
              <img
                className="rounded-full h-32 w-32"
                src="./assests/person2.jpg"
                alt=""
              />
            </div>
            <div className="w-100 h-auto p-5  rounded-xl flex flex-col justify-center items-center ">
              <h1
                className="text-lg font-bold mb-2
              "
              >
                Alumni Testimonial
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                vitae, laboriosam odit eum ullam ducimus et quas magnam sunt
                corrupti est illo possimus, laudantium cum ipsa dolorem eos
                repudiandae! Dignissimos.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border  p-5  bg-white rounded-lg shadow-lg  flex flex-col md:flex-row justify-center gap-5 items-center">
            <div className="w-1/2 h-auto bg-cover pt-20  ">
              <img
                className="rounded-full h-32 w-32"
                src="./assests/person2.jpg"
                alt=""
              />
            </div>
            <div className="w-100 h-auto p-5  rounded-xl flex flex-col justify-center items-center ">
              <h1
                className="text-lg font-bold mb-2
              "
              >
                Alumni Testimonial
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                vitae, laboriosam odit eum ullam ducimus et quas magnam sunt
                corrupti est illo possimus, laudantium cum ipsa dolorem eos
                repudiandae! Dignissimos.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
