import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";

export async function proxy(request) {
  // Check both plain and secure (HTTPS/production) cookie variants
  const sessionToken =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__secure-better-auth.session_token");
  
  const { pathname } = request.nextUrl;
  
  const isProtectedRoute = 
    pathname.startsWith("/profile") || 
    pathname.startsWith("/book/");

  if (isProtectedRoute && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Next.js requires the exported middleware function to be named "middleware"
export { proxy as middleware };

export const config = {
  matcher: ["/profile/:path*", "/book/:path*"],
};
