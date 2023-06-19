import {gql} from '@apollo/client';

const DELETE_OPPORTUNITY = gql`
mutation Mutation($deleteOpportunityId: String!) {
  deleteOpportunity(id: $deleteOpportunityId) {
    data {
      link
    }
    message
  }
}
`

export default DELETE_OPPORTUNITY;