export const authenticatedUser = `
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
        isAdmin
        isCustomer
        cart {
          id
        }
      }
    }
  }
`;
