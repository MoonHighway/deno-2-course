import { sing } from "jsr:@eveporcello/sing";
import OpenAI from "https://deno.land/x/openai@v4.67.1/mod.ts";

console.log(sing("bread", 3));

const openai = new OpenAI();
console.log(openai);

console.log(import.meta.url);
console.log(import.meta.dirname);
