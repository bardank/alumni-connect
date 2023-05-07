import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold text-blue-600 m-4">Upcoming Events</h2>
      <div className="m-4 flex flex-wrap gap-5 justify-center">
        <UpcomingEvents
          eventName="Alumni Reunion Function"
          date="May 15,2023"
          location="SKIT Auditorium"
          time="10:00 am"
        />
        <UpcomingEvents
          eventName="Shristi"
          date="June 19,2023"
          location="SKIT "
          time="10:00 am"
        />
        <UpcomingEvents
          eventName="Kreedavotsava"
          date="June 20,2023"
          location="SKIT "
          time="10:00 am"
        />
        <UpcomingEvents
          eventName="SKIT Premier league"
          date="JUle 21,22,2023"
          location="SKIT Ground"
          time="10:00 am"
        />
        <UpcomingEvents
          eventName="Ethnic Day"
          date="June 23,2023"
          location="SKIT "
          time="10:00 am"
        />
        <UpcomingEvents
          eventName="Alumni Meet and Yuvan"
          date="June 24,2023"
          location="SKIT Auditorium"
          time="10:00 am"
        />
      </div>
      <hr className="border-t border-dashed border-gray-400 my-8" />

      <h2 className="text-2xl font-bold text-blue-600 m-4">Job Posting</h2>
      <div className="m-4 flex flex-wrap gap-5 justify-center">
        <Jobposting
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <Jobposting
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <Jobposting
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <Jobposting
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <Jobposting
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <Jobposting
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
      </div>

      <Footer />
    </div>
  );
}
const Reunion = ({ year, date, location }) => {
  return (
    <div className=" border  p-2  bg-white rounded-lg shadow-lg  w-[250px] h-[180px] text-center ">
      <h3 className="text-lg font-bold mb-2">Class of {year}</h3>
      <p className="text-gray-500 mb-2">Date:{date}</p>
      <p className="text-gray-500 mb-4">Location:{location}</p>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
        type=""
      >
        RSVP Now
      </button>
    </div>
  );
};

const Jobposting = ({ jobRole, companyName, location }) => {
  return (
    <div className=" border  p-2  bg-white rounded-lg shadow-lg  w-[250px] h-[180px] text-center ">
      <h3 className="text-lg font-bold mb-2">{jobRole}</h3>
      <p className="text-gray-500 mb-2">Company:{companyName}</p>
      <p className="text-gray-500 mb-4">Location:{location}</p>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
        type=""
      >
        Apply Now
      </button>
    </div>
  );
};
const UpcomingEvents = ({ eventName, date, location, time }) => {
  return (
    <div className=" border  p-2  bg-white rounded-lg shadow-lg  w-[250px] h-[200px] text-center ">
      <h3 className="text-lg font-bold mb-2">{eventName}</h3>
      <p className="text-gray-500 mb-2">Date:{date}</p>
      <p className="text-gray-500 mb-2">Location:{location}</p>
      <p className="text-gray-500 mb-2">Time:{time} onward</p>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
        type=""
      >
        RSVP Now
      </button>
    </div>
  );
};
