import { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import EventFormDash from "../../components/EventForm";
import CREATE_EVENT from "@/graphql/mutation/CREATE_EVENT";
import { FETCH_EVENTS } from "../../graphql/query/FETCH_EVENTS";
import EDIT_EVENT from "@/graphql/mutation/EDIT_EVENT";
import { useNotification } from "@/customHooks/useNotification";
import moment from "moment";
import { client } from "@/graphql/client";
import { uuid } from "uuidv4";
export default function Home() {
  const [queryData, setQUeryData] = useState({
    count: 10,
    pageNo: 1,
  });

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [edit, setEdit] = useState(false);

  const [eventId, setEventId] = useState("");

  const { setNotification } = useNotification();

  //   const { data, loading } = useQuery(FETCH_EVENTS, {
  //     variables: {
  //       fetchEventsInput: {
  //         ...queryData,
  //       },
  //     },
  //     onCompleted: (data) => {
  //       if (data?.fetchEvents?.success) {
  //         console.log(data.fetchEvents.data);
  //         setEvents(data.fetchEvents.data);
  //       }
  //     },
  //   });

  const [formData, setFormData] = useState({
    title: "",
    eventDate: "",
    location: "",
  });

  const resetForm = async () => {
    setFormData({
      title: "",
      eventDate: "",
      location: "",
    });
  };

  const getEvents = async () => {
    try {
      const { data } = await client.query({
        query: FETCH_EVENTS,
        variables: {
          fetchEventsInput: {
            ...queryData,
          },
        },
      });
      if (data?.fetchEvents?.success) {
        console.log(data.fetchEvents.data);
        setEvents(data.fetchEvents.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await client.mutate({
      mutation: CREATE_EVENT,
      variables: {
        createEventInput: {
          date: formData.eventDate,
          eventName: formData.title,
          location: formData.location,
        },
      },
    });

    if (response.data.createEvent.success) {
      setNotification(uuid(), "Event Created Succensfully", "Success", 3000);
      resetForm();
    } else {
      setNotification(uuid(), "Something went wrong", "Error", 3000);
    }
  };

  const onEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.mutate({
        mutation: EDIT_EVENT,
        variables: {
          updateEventId: eventId,
          data: {
            date: formData.eventDate,
            eventName: formData.title,
            location: formData.location,
          },
        },
      });
      if (response.data.updateEvent.success) {
        setNotification(uuid(), "Event Updated Succensfully", "Success", 3000);
        resetForm();
        setEdit(false);
        getEvents();
      }
    } catch (error) {
      setNotification(uuid(), "Something went wrong", "Error", 3000);
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <AdminLayout>
      <h1 className="p-4 font-bold text-center text-3xl">Upcoming Events</h1>
      <div>
        <EventFormDash
          onSubmit={edit ? onEditSubmit : onSubmit}
          onChange={onChange}
          formData={formData}
          edit={edit}
          setEdit={setEdit}
          resetForm={resetForm}
        />
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
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Optional: Add smooth scrolling behavior
              });
              setEventId(item._id);
              setFormData((prev) => ({
                ...prev,
                title: item.eventName,
                eventDate:
                  item.date.split("T")[0] +
                  "T" +
                  item.date.split("T")[1].substring(0, 5),
                location: item.location,
              }));

              setEdit(true);
            }}
          />
        ))}
      </div>
      {/* {events && (
        <Pagination back={data.fetchEvents.back} next={data.fetchEvents.next} />
      )} */}
    </AdminLayout>
  );
}

const UpcomingEvents = ({ eventName, date, location, time, onClick }) => {
  return (
    <div className=" border  p-2  bg-white rounded-lg shadow-lg  w-[250px] h-[200px] text-center ">
      <h3 className="text-lg font-bold mb-2">{eventName}</h3>
      <p className="text-gray-500 mb-2">Date:{date}</p>
      <p className="text-gray-500 mb-2">Location:{location}</p>
      <p className="text-gray-500 mb-2">Time:{time} onward</p>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
        type=""
        onClick={onClick}
      >
        Edit Event
      </button>
    </div>
  );
};
