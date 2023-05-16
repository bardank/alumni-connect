import { gql, useMutation } from "@apollo/client";


const LOGIN_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            message
            success
            user {
                _id
                accessToken
                createdAt
                email
                fullName
                phone
                salt
                verifiedPhone
            }
        }
    }

`;

export default LOGIN_USER;