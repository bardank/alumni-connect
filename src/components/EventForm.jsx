import React from "react";
import Input from "./UI/Input";
import { useState } from "react";
import Button from "./UI/Button";

const EventForm = ({
  onSubmit,
  onChange,
  formData,
  edit,
  setEdit,
  resetForm,
}) => {
  return (
    <div>
      <h2 className="px-10">{edit ? "Update Event" : "Create New Event"}</h2>
      <form onSubmit={onSubmit} className="flex flex-col w-full px-10 py-4">
        <Input
          label="Event Name"
          type="text"
          placeholder="Enter event name"
          onChange={onChange}
          name="title"
          value={formData.title}
        />
        <Input
          label="Event Date"
          type="datetime"
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

        <div className="flex w-full gap-4 px-4 justify-center">
          <Button
            type="submit"
            label={edit ? "Update Event" : "Create Event"}
            className="px-6"
          />
          {edit ? (
            <Button
              onClick={() => {
                setEdit(false), resetForm();
              }}
              label="Cancel"
              className="px-6"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default EventForm;
