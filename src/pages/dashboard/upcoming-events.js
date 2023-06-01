import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import EventFormDash from "../../components/EventForm";
import { useQuery } from "@apollo/client";
import { FETCH_EVENTS } from "../../graphql/query/FETCH_EVENTS";
import Pagination from "../../components/Pagination/Pagination";

import moment from "moment";
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
    <AdminLayout>
      <div>
        <EventFormDash />
      </div>
      <h2 className="text-2xl p-4 font-semibold">Upcomping Events Lists</h2>

      <div className="flex flex-wrap gap-3 m-5 justify-center">
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
      {data && (
        <Pagination back={data.fetchEvents.back} next={data.fetchEvents.next} />
      )}
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
