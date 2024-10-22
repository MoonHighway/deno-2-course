const handler = (): Response => {
  return new Response("Hello from Deno!", {
    headers: { "Content-Type": "text/plain" }
  });
};

Deno.serve(handler);
