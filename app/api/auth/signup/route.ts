import { NextRequest, NextResponse } from "next/server";

import { CMS_URL, tokenName } from "@/constants";
import { CREATE_USER } from "@/mutations/user";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  const response = await fetch(`${CMS_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CREATE_USER,
      variables: {
        data: { name, email, password },
      },
    }),
  });
  console.log('%capp/api/auth/signup/route.ts:23 result', 'color: #26bfa5;', response);

  const result = await response.json();
  if (result.errors) {
    return NextResponse.json(
      { error: result.errors[0].message },
      { status: 400 },
    );
  } else if (result.data.authenticateUserWithPassword.sessionToken) {
    const sessionToken = result.data.authenticateUserWithPassword.sessionToken;
    let response = new NextResponse();

    response.cookies.set(tokenName, sessionToken);

    return response;
  } else return NextResponse.json(result.data.createUser);
}
