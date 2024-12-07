import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hasCookie = request.cookies.has(
    process.env.NEXT_PUBLIC_COOKIE_NAME ?? "sessionToken",
  );

  if (!hasCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
