import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-container w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="flex justify-center items-center h-full text-white">
          <h5 className="text-2xl font-bold">
            Welcome To Your SKIT Alumni Website
          </h5>
        </div>
      </div>
      <div className="flex justify-center items-center py-16 h-full text-black">
        <p className="text-3xl font-semibold">
          Our Purpose of Alumni Association
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto justify-center gap-4  py-4 px-8 md:px-14 lg:px-24  cursor-pointer 	">
        <PurposeCard
          text="Our vision is a worldwide alumni network that fosters lifelong connections and engagement with the college, empowering alumni to make a positive impact in their lives and the community."
          icon="./assests/icons/vision.png"
        />
        <PurposeCard
          text=" We aim to foster a spirit of lifelong learning and professional development, and to support the college's mission of promoting academic excellence, diversity, and social responsibility."
          icon="./assests/icons/mission.png"
        />
        <PurposeCard
          text=" Our objectives are to increase alumni engagement through diverse
            programs and events, provide networking resources for career growth,
            and support the college's strategic initiatives through fundraising
            and advocacy."
          icon="./assests/icons/objectives.png"
        />
      </div>
      <div className="flex justify-center items-center py-16 h-full text-black pb-6 ">
        <h5 className="text-3xl font-semibold">Gallary</h5>
      </div>
      <div className=" gallary flex gap-3 ">
        <GalleryImage src="./assests/gallary/pic1.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic2.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic3.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic4.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic5.png" alt="gallery-pic" />
      </div>
      <div className="text-center ">
        <a href="https://www.skit.org.in/gallery.html#">
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
      <div className="flex justify-center items-center py-16 h-full text-black pb-6">
        <h5 className="text-3xl font-semibold">
          Join the Alumni Association: Register Today!
        </h5>
      </div>
      <div className="flex place-items-center  flex-auto justify-items-center gap-10 place-content-center ">
        <div className="shrink ">
          <a href=""></a>
        </div>
        <div className="w-80">
          <p className="text-center">
            Welcome to the alumni community of SKIT. As a member of the alumni
            association, you will have access to a wide range of benefits,
            including networking opportunities, career resources, and exclusive
            events.
          </p>
          <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 w-56 h-12 m-10 rounded-3xl">
            <a href="registeration" target="_blank">
              Register now!
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const PurposeCard = ({ text, icon }) => {
  return (
    <div className="border-primary border-2 hover:border-blue-500 bg-white p-4 rounded-xl">
      <div className="text-center mb-2">
        <img src={icon} alt="Icon" className="w-8 h-8 mx-auto" />
      </div>
      {text}
    </div>
  );
};

const GalleryImage = ({ src, alt }) => {
  return (
    <div>
      <img className="gallaryPic" src={src} alt={alt} />
    </div>
  );
};
