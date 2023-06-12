import { gql } from "@apollo/client";

const ME = gql`
  query Query {
    me {
      user {
        _id
        email
        fullName
        accessToken
      }
      message
      success
    }
  }
`;

export default ME;
