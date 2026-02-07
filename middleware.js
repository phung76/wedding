export const config = {
  matcher: "/",
};

export default async function middleware(request) {
  const host = request.headers.get("host") || "";
  const base = new URL(request.url).origin;

  let targetPath = "/index.html";
  if (host === "wedding-thuandhoa.vercel.app") {
    targetPath = "/index-namlinh.html";
  } else if (host === "wedding-it7v.vercel.app") {
    targetPath = "/index.html";
  }

  const targetUrl = base + targetPath;
  const res = await fetch(targetUrl, {
    headers: request.headers,
  });
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers,
  });
}
