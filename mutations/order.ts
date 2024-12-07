export const GET_ORDER_INFO = `
query Order($where: OrderWhereUniqueInput!, $take: Int) {
  order(where: $where) {
    totalAmount
    status
    itemsCount
    id
    createdAt
    items {
      id
      quantity
      product {
        slug
        rating
        name
        id
        image(take: $take) {
          image {
            publicUrl
          }
        }
      }
      length {
        id
        name
      }
      color {
        id
        name
      }
      price
    }
  }
}`;

export const CREATE_ORDER_FROM_CART = `
  mutation CreateOrderFromCart($createOrderFromCartId: ID!) {
  createOrderFromCart(id: $createOrderFromCartId) {
    id
  }
} 
`;
