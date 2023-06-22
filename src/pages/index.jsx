import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/UI/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import TextAnimation from "../components/TextAnimation";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  const router = useRouter();

  const onRegisterClick = () => {
    router.push("/registeration");
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <Carousel
          infiniteLoop
          autoPlay={false}
          showStatus={false}
          showArrows={true}
          interval={5000}
          showThumbs={false}
          showIndicators={true}
        >
          <div>
            <img className="bg" src="./assests/group_pic.jpg" alt="" />
          </div>
          <div>
            <img
              className="bg object-cover"
              src="./assests/gallary/gallaryImage1.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="bg object-cover"
              src="./assests/principal.jpg"
              alt=""
            />
          </div>

          {/* <div>
          <img
            className="bg"
            src="../assests/backgroundImages/background3.jpg"
            alt=""
          />
        </div> */}
        </Carousel>
        <div className="absolute inset-0 h-full w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="text-overlay text-2xl font-bold text-white ">
              <h2 className="text-3xl text-center font-semibold">
                Welcome to Alumni Website
              </h2>
            </div>
            <div className="button-overlay pt-6">
              <button className="bg-secondary  hover:bg-blue-700 text-white font-bold py-2 px-4 w-56 m-10 rounded-3xl">
                <a href="registeration" target="_blank">
                  Register now!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-12 pb-8 px-8 text-black">
        <p className="text-3xl font-semibold">
          Our Purpose of Alumni Association
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto justify-center gap-4  py-4 px-8 md:px-14 lg:px-24  cursor-pointer 	">
        <PurposeCard
          text="To serve as a platform to connect the institute, alumni and students to have a better interaction with each other for their holistic development."
          icon="./assests/icons/vision.png"
          heading="Vision"
        />
        <PurposeCard
          text=" To cultivate a sense of belonging and community among alumni, connecting them with each other and with the institution.
          To provide a platform for alumni to network and establish professional connections, helping them to leverage their shared experiences and expertise with students."
          icon="./assests/icons/mission.png"
          heading="Mission"
        />
        <PurposeCard
          text=" To organize and establish scholarship funds to help the needy and deserving students.
To exchange professional knowledge, organize technical conferences, seminars workshops & training courses.
To provide career development guidance."
          icon="./assests/icons/objectives.png"
          heading="Objective"
        />
      </div>
      <div className="flex justify-center items-center py-16 h-full text-black pb-6 ">
        <h5 className="text-3xl font-semibold">Gallery</h5>
      </div>
      <div className=" gallary flex gap-2  ">
        <GalleryImage
          src="./assests/gallary/gallaryImage1.jpeg"
          alt="gallery-pic"
        />
        <GalleryImage src="./assests/gallary/img2.jpg" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic3.jpg" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic4.jpg" alt="gallery-pic" />
      </div>
      <div className="text-center pt-4">
        <a href="https://www.skit.org.in/gallery.html#" target="_blank">
          <h3 className="text-secondary text-3xl font-semibold">
            Explore More
            <img
              className="w-8 h-8 mx-auto ml-2 inline-block"
              src="./assests/icons/exploreMore.png"
              alt="exploreMoreIcon"
            />
          </h3>
        </a>
      </div>

      <div className="flex justify-center items-center px-10 pt-10 pb-6 h-full text-black">
        <h5 className="text-3xl font-semibold text-center">
          Join the Alumni Association: Register Today!
        </h5>
      </div>
      <div className="flex place-items-center  flex-auto justify-items-center gap-10 place-content-center ">
        <div className="w-80 pb-8">
          <p className="text-center pb-4">
            Welcome to the alumni community of SKIT. As a member of the alumni
            association, you will have access to a wide range of benefits,
            including networking opportunities, career resources, and exclusive
            events.
          </p>
          {/* <Button onClick={onRe/gisterClick} label="Register now" /> */}
        </div>
      </div>
      <TestimonialSlider />
      <Footer />
    </div>
  );
}

const PurposeCard = ({ text, icon, heading }) => {
  return (
    <div className="border-gray-200 border-2 shadow-md hover:shadow-2xl bg-white p-4 rounded-xl">
      <div className="text-center mb-2">
        <img src={icon} alt="Icon" className="w-8 h-8 mx-auto" />
        <h1 className="font-medium text-3xl py-4">{heading}</h1>
      </div>
      <p className="tex-sm pt-2 pb-4 text-center">{text}</p>
    </div>
  );
};

const GalleryImage = ({ src, alt }) => {
  return (
    <div>
      <img
        className="w-[450px] h-full object-cover"
        src={src}
        alt={alt}
        // className="w-150 h-150 object-cover"
      />
    </div>
  );
};
