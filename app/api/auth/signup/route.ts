import { NextRequest, NextResponse } from 'next/server';

export const CREATE_USER = `
  mutation($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      email
    }
  }
`
export const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000'

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();


  const response = await fetch(`${CMS_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CREATE_USER,
      variables: {
        data: { name, email, password },
      },
    }),
  });

  const result = await response.json();
  if (result.errors) {
    return NextResponse.json({ error: result.errors[0].message }, { status: 400 });
  } else if (result.data.authenticateUserWithPassword.sessionToken) {
    const sessionToken = result.data.authenticateUserWithPassword.sessionToken;
    let response = new NextResponse()
    response.cookies.set(
      process.env.NEXT_PUBLIC_COOKIE_NAME ?? 'sessionToken',
      sessionToken
    )
    return response
  }
  else return NextResponse.json(result.data.createUser);
}
