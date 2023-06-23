import Footer from "../components/Footer/Footer";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { FETCH_EVENTS } from "../graphql/query/FETCH_EVENTS";
import { useQuery } from "@apollo/client";
import moment from "moment";
import PageLayout from "../layout/PageLayout";
import { IoLocation } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

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
    <PageLayout className={"pt-6"} lable="Upcoming Events & Activities">
      <div className="m-4 pt-8 flex flex-wrap gap-5 justify-center">
        {loading && <div>loading...</div>}
        {events.map((item) => (
          <UpcomingEvents
            key={item._id}
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

const UpcomingEvents = ({ eventName, date, location, time }) => {
  return (
    <div className=" border  p-2  bg-white rounded-lg shadow hover:shadow-2xl cursor-default w-[300px] flex flex-col text-center ">
      <div className="bg-secondary rounded px-8 ">
        <h3 className="text-lg text-white capitalize  font-bold py-1">
          {eventName}
        </h3>
      </div>
      <div className="px-4 ">
        <DetailItem
          lable={location}
          icon={<IoLocation className="text-secondary text-2xl" />}
        />
        <DetailItem
          lable={date}
          icon={<BsCalendarDate className="text-secondary text-2xl" />}
        />
        <DetailItem
          lable={time}
          icon={<IoMdTime className="text-secondary text-2xl" />}
        />
      </div>
    </div>
  );
};
const DetailItem = ({ lable, icon }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="">{icon}</div>
      <div className="flex justify-center items-center p-3">
        <p className=" mb-2">{lable}</p>
      </div>
    </div>
  );
};
