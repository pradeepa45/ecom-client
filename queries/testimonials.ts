export const getTestimonials = `
  query Testimonials {
  testimonials {
    id
    name
    position
    company
    message
    rating
    createdAt
  }
}
`