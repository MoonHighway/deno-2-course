function handler(): Response {
  return new Response("It's happening!");
}

Deno.serve(handler);
