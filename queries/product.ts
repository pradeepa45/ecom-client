export const getProductWithSlug = `
query Products($where: ProductWhereInput!) {
  products(where: $where) {
    id
    name
    slug
    description
    image {
      id
      image {
        publicUrl
      }
      altText
    }
    imageCount
    status
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
  }
}
`;