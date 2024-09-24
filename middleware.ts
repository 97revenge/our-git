import { NextResponse, type NextRequest } from "next/server";
import { login } from "./lib/zod/githubUser";
import type { z } from "zod";

export default async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const redirect = NextResponse.redirect(new URL("/", request.url));
  const next = NextResponse.next();

  const incharge = request.nextUrl.searchParams.get("incharge");
  request;

  const login = pathname.split("/")[2];

  const validInchargeValues = ["front", "back", "fullstack", "data", "design"];

  console.log(login);

  try {
    const response = await fetch(
      `https://api.github.com/users/${login}/repos`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_KEY!}`,
        },
      }
    );
    if (!response.ok) {
      return redirect;
    }
    if (incharge && validInchargeValues.includes(incharge)) {
      return next;
    } else {
      return redirect; // Redirect if "incharge" doesn't match
    }
  } catch (err) {
    console.log(err);
    return redirect;
  }
}

export const config = {
  matcher: ["/test/:path*"],
};
