import { gql } from "@apollo/client";

const EDIT_EVENT = gql`
  mutation UpdateEvent($updateEventId: String!, $data: CreateEventInput!) {
    updateEvent(id: $updateEventId, data: $data) {
      data {
        _id
        date
        eventName
        location
      }
      message
      success
    }
  }
`;

export default EDIT_EVENT;
