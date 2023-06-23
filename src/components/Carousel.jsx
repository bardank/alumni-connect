import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const contributions = [
  {
    image: "./assests/Contribution/Azhar.png",
    name: "Mr. Azhar Shareef",
    text: "  Sponsored Cricket KIT.",
  },
  {
    image: "./assests/Contribution/Megha.png",
    name: "Ms. Megha B S",
    text: "Referred for the placements Conducted a workshop on Machine Learning",
  },
  {
    image: "./assests/Contribution/Pavan.png",
    name: "Mr. Pavan H S ",
    text: "  Referred for the Placement.",
  },
  {
    image: "./assests/Contribution/Sanjana.png",
    name: "Ms. Sanjana Srinivas",
    text: "Delivered a talk on Engineering journey during Induction Program.",
  },
  {
    image: "./assests/Contribution/Sreevathsa.png",
    name: "Mr. Sreevathsa C V",
    text: "   Alumni Talk on Backend Technologies.",
  },

  {
    image: "./assests/Contribution/Shravan.png",
    name: "Mr. Shravan Bhardwaj ",
    text: "  Delivered a Alumni talk on Carrier guidance.",
  },
  {
    image: "./assests/Contribution/Vidya.png",
    name: "Ms. Vidya M",
    text: " Has given Alumni talk On .",
  },
  {
    image: "./assests/Contribution/Manoj.png",
    name: "Mr. Manoj Pranesh",
    text: "Alumni Mentoring,Motivational Speech,Career Guidance Sessions,Mock Interview for current graduated students.,One to One Counselling for slow learners.",
  },
];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper m-10   "
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {contributions.map((item, i) => (
          <SwiperSlide key={i}>
            <div className=" border  p-5  bg-white rounded-lg shadow-lg  flex flex-col md:flex-col justify-center gap-5 items-center">
              <div className="w-1/2 h-full bg-cover pt-20 flex justify-center items-center">
                <div className=" ">
                  <img
                    className="rounded-full  object-cover h-28 w-28"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-100 h-auto p-5  rounded-xl flex flex-col justify-center items-center ">
                <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                <h4 className="text-lg font-medium mb-2">Contributed as</h4>
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
