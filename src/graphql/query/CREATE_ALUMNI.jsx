import { gql } from "@apollo/client";


export const CREATE_ALUMNI = gql`
mutation CreateAlumni($createAlumniInput: CreateAlumniInput!) {
  createAlumni(createAlumniInput: $createAlumniInput) {
    data {
      _id
      branch
      createdAt
      currentAddress
      email
      currentPosition
      fullName
      isApproved
    }
    message
    success
  }
}
`;
