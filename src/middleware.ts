import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // If accessed via any *.vercel.app domain or www.ayush.company, 301 permanently redirect to https://ayush.company
  if (host.includes(".vercel.app") || host === "www.ayush.company") {
    const url = request.nextUrl.clone();
    url.host = "ayush.company";
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg, etc.
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.svg).*)",
  ],
};
