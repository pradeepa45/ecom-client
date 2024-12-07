import { NextRequest, NextResponse } from "next/server";

import { CMS_URL, tokenName } from "@/constants";
import { AUTH_USER } from "@/mutations/user";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const response = await fetch(`${CMS_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: AUTH_USER,
      variables: { email, password },
    }),
  });
  const result = await response.json();

  if (result.data.authenticateUserWithPassword.sessionToken) {
    const sessionToken = result.data.authenticateUserWithPassword.sessionToken;
    let response = new NextResponse();

    response.cookies.set(tokenName, sessionToken);

    return response;
  } else {
    return NextResponse.json(
      { error: result.data.authenticateUserWithPassword.message },
      { status: 401 },
    );
  }
}
