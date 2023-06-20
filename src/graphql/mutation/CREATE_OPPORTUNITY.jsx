import { gql } from "@apollo/client";

const CREATE_OPPORTUNITY = gql`mutation Mutation($createOpportunityInput: CreateOpportunityInput!) {
  createOpportunity(createOpportunityInput: $createOpportunityInput) {
    data {
      companyName
      approved
      jobType
      description
      link
      location
      title
      _id
      createdAt
      updatedAt
    }
    message
    success
  }
}`

export default CREATE_OPPORTUNITY;