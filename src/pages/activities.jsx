import Footer from "../components/Footer/Footer";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { FETCH_EVENTS } from "../graphql/query/FETCH_EVENTS";
import { useQuery } from "@apollo/client";
import moment from "moment";
import PageLayout from "../layout/PageLayout";
export default function Home() {
  const [queryData, setQUeryData] = useState({
    count: 10,
    pageNo: 1,
  });

  const [events, setEvents] = useState([]);

  const { data, loading } = useQuery(FETCH_EVENTS, {
    variables: {
      fetchEventsInput: {
        ...queryData,
      },
    },
    onCompleted: (data) => {
      if (data?.fetchEvents?.success) {
        console.log(data.fetchEvents.data);
        setEvents(data.fetchEvents.data);
      }
    },
  });

  return (
    <PageLayout>
      <h2 className="text-center text-2xl px-10 py-2 font-bold text-secondary">Upcoming Events & Activivties</h2>
      <div className="m-4 flex flex-wrap gap-5 justify-center">
        {loading && <div>loading...</div>}
        {events.map((item) => (
          <UpcomingEvents
            eventName={item.eventName}
            date={moment(item.date).format("Do MMMM YYYY")}
            time={moment(item.date).format(" h:mm A")}
            location={item.location}
          />
        ))}
      </div>
    </PageLayout>
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
