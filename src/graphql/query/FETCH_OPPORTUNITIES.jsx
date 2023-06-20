import { gql } from "@apollo/client";

const FETCH_OPPORTUNITIES = gql`
query Query($fetchOpportunities: FetchOpportunityInputs!) {
  fetchOpportunities(fetchOpportunities: $fetchOpportunities) {
    data {
      companyName
      jobType
      link
      description
      location
      title
      createdAt
      approved
      _id
      updatedAt
    }
    success
  }
}`

export default FETCH_OPPORTUNITIES;