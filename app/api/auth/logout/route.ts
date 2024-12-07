import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { tokenName } from "@/constants";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get(tokenName);

  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
      },
    );
  }
  cookieStore.delete(tokenName);

  return NextResponse.redirect(new URL("/dashboard", req.url));
}
