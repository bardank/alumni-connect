import {gql} from "@apollo/client";

const CREATE_EVENT = gql`
mutation CreateEvent($createEventInput: CreateEventInput!) {
  createEvent(createEventInput: $createEventInput) {
    data {
      image
      _id
      eventName
      date
      location
      updatedAt
    }
    message
    success
  }
}
`;

export default CREATE_EVENT;