export const CREATE_USER = `
mutation($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    email
  }
}
`;

export const AUTH_USER = `
mutation($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        id
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
`;
