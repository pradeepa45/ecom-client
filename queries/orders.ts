export const GET_USER_ORDERS = `
  query Orders($where: OrderWhereInput!) {
  orders(where: $where) {
    totalAmount
    status
    itemsCount
    id
    createdAt
    items {
      quantity
      price
      length {
        value
        name
        id
      }
      id
      color {
        id
        name
        slug
      }
    }
  }
}
`;
