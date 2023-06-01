import React from "react";
import Input from "./UI/Input";
import { useState } from "react";
import Button from "./UI/Button";
import Datetime from "react-datetime";
import CREATE_EVENT from "../graphql/mutation/CREATE_EVENT";
import { useMutation } from "@apollo/client";
const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    eventDate: "",
    location: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      eventDate: "",
      location: "",
    });
  };

  const [createEvent, { loading, error, data }] = useMutation(CREATE_EVENT, {
    variables: {},
    onCompleted: (data) => {
      if (data.createEvent?.success) {
        resetForm();
      }
    },
  });

  const onChange = (e) => {
    console.log(e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createEvent({
      variables: {
        createEventInput: {
          date: formData.eventDate,
          eventName: formData.title,
          location: formData.location,
        },
      },
    });
  };

  return (
    <div>
      {console.log({ formData })}
      <form onSubmit={onSubmit} className="flex flex-col w-full px-10 py-4">
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
