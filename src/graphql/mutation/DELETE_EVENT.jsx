import { gql } from "@apollo/client";

const DELETE_EVENT = gql`
  mutation DeleteEvent($deleteEventId: String!) {
    deleteEvent(id: $deleteEventId) {
      message
      success
    }
  }
`;

export default DELETE_EVENT;
