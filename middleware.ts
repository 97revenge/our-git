import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const incharge = request.nextUrl.searchParams.get("incharge");

  const validInchargeValues = ["front", "back", "fullstack", "data", "design"];

  if (incharge && validInchargeValues.includes(incharge)) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect if "incharge" doesn't match
  }
}

export const config = {
  matcher: ["/test/:path*"],
};
