import { gql } from "@apollo/client";

const CREATE_ALUMNI = gql`
  mutation CreateAlumni($createAlumniInput: CreateAlumniInput!) {
    createAlumni(createAlumniInput: $createAlumniInput) {
      message
      success
      data {
        _id
        branch
        currentAddress
        currentPosition
        email
        fullName
        isApproved
        isPlacementProvidedBySkit
        linkedIn
        offerLetterLink
        phoneNumber
        presentOrganization
        suggestion
        usn
        yearOfCompletion
      }
    }
  }
`;

export default CREATE_ALUMNI;
