import React from "react";
import Input from "./UI/Input";
import { useState } from "react";
import Button from "./UI/Button";
const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    eventDate: new Date(),
    location: "",
  });

  const onChange = (e) => {
    console.log(e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {console.log({ formData })}
      <form action="" className="flex flex-col w-full px-10 py-4">
        <Input
          label="Event Name"
          type="text"
          placeholder="Enter event name"
          onChange={onChange}
          name={"title"}
          value={formData.label}
        />
        <Input
          label="Event Date"
          type="datetime-local"
          onChange={onChange}
          placeholder="Enter event date"
          name="eventDate"
          value={formData.eventDate}
        />
        <Input
          label="Event Location"
          type="text"
          onChange={onChange}
          name="location"
          placeholder="Enter event location"
          value={formData.location}
        />

        <div className="flex w-full px-4 justify-center">
          <Button type="submit" label="Create Event" className="px-6" />
        </div>
      </form>
    </div>
  );
};

export default EventForm;
