import {gql} from "@apollo/client";

export const FETCH_EVENTS = gql`
query Query($fetchEventsInput: FetchEventsInput!) {
  fetchEvents(fetchEventsInput: $fetchEventsInput) {
    data {
      _id
      createdAt
      date
      eventName
      image
      location
      updatedAt
    }
  }
}
`;