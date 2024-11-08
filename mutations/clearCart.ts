import { gql } from "@apollo/client"

export const CLEAR_CART_MUTATION = gql`
  mutation ClearCart($userId: ID!) {
    clearCart(userId: $userId) {
      id
      items {
        id
      }
    }
  }
`;