// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/hello")) {
    const basicAuth = request.headers.get("authorization");
    if (basicAuth) {
      const auth = basicAuth.split(" ")[1];
      const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");
      if (user === "mydmin" && pwd === "mypassword") {
        return NextResponse.next();
      }
    }
    request.nextUrl.pathname = "/";
    return NextResponse.redirect(request.nextUrl);
  }
}
