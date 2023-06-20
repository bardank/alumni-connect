import { gql } from "@apollo/client";

const GET_ALUMNI_BY_ID = gql`
  query GetAlumni($getAlumniId: String!) {
    getAlumni(id: $getAlumniId) {
      success
      message
      data {
        _id
        branch
        currentAddress
        createdAt
        currentPosition
        email
        fullName
        isApproved
        linkedIn
        isPlacementProvidedBySkit
        offerLetterLink
        phoneNumber
        presentOrganization
        updatedAt
        suggestion
        usn
        yearOfCompletion
      }
    }
  }
`;

export default GET_ALUMNI_BY_ID;
