import { gql } from "@apollo/client";

const EDIT_OPPORTUNITY = gql`
  mutation Mutation(
    $data: CreateOpportunityInput!
    $updateOpportunityId: String!
  ) {
    updateOpportunity(data: $data, id: $updateOpportunityId) {
      data {
        _id
        title
        approved
        companyName
        createdAt
        location
        description
        jobType
        link
      }
      message
      success
    }
  }
`;

export default EDIT_OPPORTUNITY;
