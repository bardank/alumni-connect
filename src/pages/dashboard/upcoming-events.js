import { Input } from "postcss";
import AdminLayout from "../../layout/AdminLayout";
import EventFormDash from "../../components/EventForm";

export default function Home() {
  return (
    <AdminLayout>
      <div>
        <EventFormDash />
      </div>
      <h2 className="text-2xl p-4 font-semibold">Upcomping Events Lists</h2>

      <div className="flex flex-wrap gap-3 m-5 justify-center">
        <UpcomingEvents
          eventName="alumni"
          date="12 may,2023"
          time="10:00am"
          location="bangalore"
        />
        <UpcomingEvents
          eventName="alumni"
          date="12 may,2023"
          time="10:00am"
          location="bangalore"
        />
        <UpcomingEvents
          eventName="alumni"
          date="12 may,2023"
          time="10:00am"
          location="bangalore"
        />
      </div>
    </AdminLayout>
  );
}

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
