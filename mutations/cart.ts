export const CREATE_USER_CART = `
  mutation UpdateCartItems($data: CartCreateInput!) {
  createCart(data: $data) {
    id
  }
}
`

export const GET_USER_CART = `
  query Carts($where: CartWhereInput!) {
  carts(where: $where) {
    id
  }
}
`

export const GET_CART_ITEMS = `
query Cart($where: CartWhereUniqueInput!) {
  cart(where: $where) {
    itemsCount
    items {
      id
      quantity
      product {
        id
        name
        slug
        lengths {
          id
          name
          value
        }
        colors {
          id
          name
          slug
        }
        image {
          id
          image {
            publicUrl
          }
          altText
        }
      }
      length {
        id
        name
        value
      }
      color {
        id
        name
        slug
      }
      cart {
        id
      }
      requestedPrice
    }
  }
}
`

export const UPDATE_CART = `
mutation UpdateCart($where: CartWhereUniqueInput!, $data: CartUpdateInput!) {
  updateCart(where: $where, data: $data) {
    itemsCount
  }
}`

export const REMOVE_FROM_CART = `
  mutation UpdateCart(
    $where: CartWhereUniqueInput!
    $data: CartUpdateInput!
    $deleteCartItemWhere2: CartItemWhereUniqueInput!
  ) {
    updateCart(where: $where, data: $data) {
      itemsCount
    }
    deleteCartItem(where: $deleteCartItemWhere2) {
      id
    }
}`