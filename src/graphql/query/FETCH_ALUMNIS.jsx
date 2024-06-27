import { gql } from "@apollo/client";

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
        isApproved
        suggestion
        phoneNumber
        presentOrganization
        isPlacementProvidedBySkit
        yearOfCompletion
      }
      documentCount
      success
      next
      pageNo
      back
    }
  }
`;
