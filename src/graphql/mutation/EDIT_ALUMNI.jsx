import { gql } from "@apollo/client";

const EDIT_ALUMNI = gql`
  mutation Mutation($data: CreateAlumniInput!, $updateAlumuniId: String!) {
    updateAlumuni(data: $data, id: $updateAlumuniId) {
      data {
        _id
        branch
        createdAt
        currentAddress
        email
        currentPosition
        fullName
        isApproved
        isPlacementProvidedBySkit
        linkedIn
        offerLetterLink
        phoneNumber
        presentOrganization
        suggestion
        updatedAt
        usn
        yearOfCompletion
      }
      message
      success
    }
  }
`;

export default EDIT_ALUMNI;
