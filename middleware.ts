import { NextResponse, type NextRequest } from "next/server"

// While the site is not live every page shows the launching-soon screen.
// Set SITE_LIVE=true on Vercel to bring the full site back.
const LIVE = process.env.SITE_LIVE === "true"

// Paths that keep working before launch: referral links already shared
// (/r/<code>) and the API routes.
const OPEN = ["/r/", "/api/"]

export function middleware(req: NextRequest) {
  if (LIVE || OPEN.some((p) => req.nextUrl.pathname.startsWith(p))) {
    return NextResponse.next()
  }
  const headers = new Headers(req.headers)
  headers.set("x-metigan-launching", "1")
  const url = req.nextUrl.clone()
  url.pathname = "/launching-soon"
  return NextResponse.rewrite(url, { request: { headers } })
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico|.*\\.[a-zA-Z0-9]+$).*)"],
}
