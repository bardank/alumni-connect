import { gql } from "@apollo/client";

const UPDATE_ALUMUNI = gql`
mutation UpdateAlumuni($data: CreateAlumniInput!, $updateAlumuniId: String!) {
  updateAlumuni(data: $data, id: $updateAlumuniId) {
    message
    success
  }
}
`;

export default UPDATE_ALUMUNI;