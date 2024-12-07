import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getUserInfo } from "@/app/user";
import { tokenName } from "@/constants";

export async function GET() {
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
  const { authenticatedItem } = await getUserInfo();

  return NextResponse.json({ user: authenticatedItem }, { status: 200 });
}
