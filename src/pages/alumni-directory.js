import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container m-5 flex gap-5 flex-wrap justify-center   md:flex-row flex-wrap ">
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
        <AlumniProfile
          profile="/assests/Profile/profile.png"
          name="Ajay Bhuj"
          usn="1KT20CS003"
          passingYear="2024"
        />
      </div>
      <Footer />
    </div>
  );
}

const AlumniProfile = ({ profile, name, usn, passingYear }) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center w-[250px] h-[300px]">
      <div className="mb-4">
        <img className="w-20 h-20 mx-auto" src={profile} alt="profilePic" />
      </div>
      <div className="text-center">
        <h4 className="mb-2">{name}</h4>
        <p className="mb-2">{usn}</p>
        <p className="mb-2">{passingYear}</p>
        <button
          className="border-solid border-black border-2 p-1 rounded hover:bg-black hover:text-white  "
          type=""
        >
          Read More
        </button>
      </div>
    </div>
  );
};
