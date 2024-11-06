import { Hono } from "@hono/hono";

const app = new Hono();
const kv = await Deno.openKv();

interface Tree {
  id: string;
  species: string;
  age: number;
  location: string;
}

const oak: Tree = {
  id: "3",
  species: "oak",
  age: 3,
  location: "Jim's Park"
};

await kv.set(["trees", oak.id], oak);
const newTree = await kv.get(["trees", oak.id]);
console.log(newTree);
console.log(newTree.key);
console.log(newTree.value);
await kv.set(["trees", oak.id], oak);

app.post("/trees", async (c) => {
  const { id, species, age, location } = await c.req.json();
  const tree: Tree = { id, species, age, location };
  await kv.set(["trees", id], tree);
  return c.json({
    message: `We just added a ${species} tree!`
  });
});

app.get("/trees/:id", async (c) => {
  const id = c.req.param("id");
  const tree = await kv.get(["trees", id]);
  if (!tree.value) {
    return c.json({ message: "Tree not found" }, 404);
  }
  return c.json(tree.value);
});

app.delete("/trees/:id", async (c) => {
  const id = c.req.param("id");
  await kv.delete(["trees", id]);
  return c.json({
    message: `Tree ${id} has been cut down!`
  });
});

app.put("/trees/:id", async (c) => {
  const id = c.req.param("id");
  const { species, age, location } = await c.req.json();
  const updatedTree: Tree = { id, species, age, location };
  await kv.set(["trees", id], updatedTree);
  return c.json({
    message: `Tree has relocated to ${location}!`
  });
});

Deno.serve(app.fetch);
