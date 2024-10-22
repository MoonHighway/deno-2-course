import { sing } from "./sing.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("sing repeats a phrase", () => {
  const result = sing("Woo", 3);
  assertEquals(result, "Woo Woo Woo");
});
