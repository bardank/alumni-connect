import {gql} from "@apollo/client";

export const FETCH_ALUMNIS = gql`
query Query($fetchAlumnis: FetchAlumniInputs!) {
  fetchAlumnis(fetchAlumnis: $fetchAlumnis) {
    count
    data {
      _id
      branch
      currentAddress
      currentPosition
      email
      fullName
      linkedIn
      usn
      yearOfCompletion
    }
    documentCount
    success
    next
    back
  }
}
`;