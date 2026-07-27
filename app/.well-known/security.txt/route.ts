export const dynamic = "force-static";

export function GET() {
  return new Response(
    [
      "Contact: mailto:evergreenlk@gmail.com",
      "Expires: 2027-07-27T00:00:00.000Z",
      "Preferred-Languages: en",
      "Canonical: https://evergreenmalaysia.com/.well-known/security.txt",
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
