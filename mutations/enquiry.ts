export const CREATE_ENQUIRY = `
  mutation CreateEnquiry($data: EnquiryCreateInput!) {
  createEnquiry(data: $data) {
    id
    name
    email
    message
    createdAt
    status
  }
}
`;
