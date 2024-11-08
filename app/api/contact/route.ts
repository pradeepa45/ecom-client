import { CMS_URL } from '../auth/signup/route'
import { NextRequest, NextResponse } from 'next/server'

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
`

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, {status: 400});
    }

    // Send the data to Keystone (assuming you're using the Keystone REST API or GraphQL)
    const response = await fetch(`${CMS_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CREATE_ENQUIRY,
        variables: {
          data: {
            name,
            email,
            message,
          }
        }
      }),
    });

    if (response.ok) {
      return NextResponse.json({message: 'Contact form submitted successfully!'}, {status: 200})
    } else {
      return NextResponse.json({ error: 'Error saving contact form data' }, {status: 500})
    }
  } else {
    NextResponse.json({ error: 'Method not allowed' }, {status: 405});
  }
}
