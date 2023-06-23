import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
const testimonials = [
  {
    image: "./assests/Testimonial/Ashwitha.jpg",
    name: "Ashwitha Shetty",
    text: "I am Ashwitha Shetty was  student of  Sri Krishna Institute of Technology 2015-2019 Information Science and Engineering Batch.My department encouraged me to explore my talent & potential by providing an exceptional integrated learning environment. I am really grateful to my professors  who have changed my whole aspect towards learning. I express my heartfelt thanks to the institution for giving me the perfect opportunity to explore myself.",
  },
  {
    image: "./assests/Testimonial/Manoj.jpg",
    name: "Manoj Pranesh",
    text: "I came to this institution with little to no background or aptitude to engineering discipline . From the day one , inspiring sessions taken by faculty members ignited the passion of learning and understanding concepts so dearly in me I thank the institute and the faculty for all the efforts put in by them, along with the perseverance and right moves have paid off finally. All my batch mates are doing well in their respective jobs which reflect the quality of the students the institute has produced",
  },
  {
    image: "./assests/Testimonial/Spurthi.jpg",
    name: "Spurthi B",
    text: "Greetings everyone! As an alumna of Sri Krishna Institute of Technology's ECE Department, I am honored to share my transformative journey at this esteemed institution. SKIT empowered me with resilience, confidence, and the ability to conquer challenges.I express my heartfelt gratitude to my teachers, the Head of the ECE Department, and the Training and Placement Department for their unwavering support and guidance. Special thanks to Kennametal for providing invaluable global exposure and professional skills. SKIT will always hold a special place in my heart, filled with cherished memories. Thank you!",
  },
];

export default function App() {
  return (
    <div className="m-5 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper m-10    "
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className=" border  p-5  bg-white rounded-lg shadow-lg  flex flex-col md:flex-col justify-center gap-5 items-center">
              <div className="w-1/2 h-full bg-cover pt-20 flex justify-center items-center">
                <div className="   ">
                  <img
                    className="rounded-full object-cover h-24 w-24"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-100 h-auto p-5  rounded-xl flex flex-col justify-center items-center ">
                <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                <h4 className="text-lg font-bold mb-2">Alumni Testimonials</h4>
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
