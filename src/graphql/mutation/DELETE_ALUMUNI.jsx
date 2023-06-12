import { gql } from "@apollo/client";


const DELETE_ALUMUNI = gql`
mutation DeleteAlumni($deleteAlumniId: String!) {
  deleteAlumni(id: $deleteAlumniId) {
    message
    success
  }
}
`;

export default DELETE_ALUMUNI;