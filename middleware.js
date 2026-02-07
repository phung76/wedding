import { rewrite } from "@vercel/functions";

export const config = {
  matcher: "/",
};

export default function middleware(request) {
  const host = request.headers.get("host") || "";
  const url = new URL(request.url);

  if (host === "wedding-thuandhoa.vercel.app") {
    return rewrite(new URL("/index-namlinh.html", request.url));
  }
  if (host === "wedding-it7v.vercel.app") {
    return rewrite(new URL("/index.html", request.url));
  }

  return rewrite(new URL("/index.html", request.url));
}
