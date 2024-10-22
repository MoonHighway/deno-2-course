import { TextLineStream } from "@std/streams";
import { toTransformStream } from "@std/streams/to-transform-stream";
const response = await fetch(
  "https://jsonplaceholder.typicode.com/users"
);

if (response.body) {
  const transformedStream = response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream())
    .pipeThrough(
      toTransformStream(async function* (src) {
        for await (const chunk of src) {
          yield chunk;
        }
      })
    );
  const reader = transformedStream.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    console.log(value);
  }
}
