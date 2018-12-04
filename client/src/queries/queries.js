import { gql } from "apollo-boost";

const getUserQuery = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      login
      googleId
      firstName
      lastName
      email
      campus
      state
      year
      role
      lastLoggedOn
    }
  }
`;

const getUsersQuery = gql`
  {
    users {
      login
      googleId
      firstName
      lastName
      email
      campus
      state
      year
      role
      lastLoggedOn
    }
  }
`;

const newUserMutation = gql`
  mutation NewUser(
    $login: String!
    $googleId: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $campus: String!
    $state: String!
    $year: Int!
    $role: String!
    $lastLoggedOn: String!
  ) {
    addUser(
      login: $login
      googleId: $googleId
      firstName: $firstName
      lastName: $lastName
      email: $email
      campus: $campus
      state: $state
      year: $year
      role: $role
      lastLoggedOn: $lastLoggedOn
    ) {
      login
      googleId
      firstName
      lastName
      email
      campus
      state
      year
      role
      lastLoggedOn
    }
  }
`;

export { getUserQuery, getUsersQuery, newUserMutation };

// login: { type: new GraphQLNonNull(GraphQLString) },
// googleId: { type: new GraphQLNonNull(GraphQLString) },
// firstName: { type: new GraphQLNonNull(GraphQLString) },
// lastName: { type: new GraphQLNonNull(GraphQLString) },
// email: { type: new GraphQLNonNull(GraphQLString) },
// campus: { type: new GraphQLNonNull(GraphQLString) },
// state: { type: new GraphQLNonNull(GraphQLString) },
// year: { type: new GraphQLNonNull(GraphQLInt) },
// role: { type: new GraphQLNonNull(GraphQLString) },
// lastLoggedOn: { type: new GraphQLNonNull(GraphQLString) }
