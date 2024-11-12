import { Hono } from "jsr:@hono/hono";

const app = new Hono();

interface Tree {
  id: string;
  species: string;
  age: number;
  location: string;
}

const oak: Tree = {
  id: "1",
  species: "oak",
  age: 3,
  location: "Jim's Park"
};

const maple: Tree = {
  id: "2",
  species: "maple",
  age: 5,
  location: "Betty's Garden"
};

const trees: Tree[] = [oak, maple];

app.get("/", (c) => {
  return c.text("🌲 🌳 The Trees Welcome You! 🌲 🌳");
});

app.get("/trees", (c) => {
  return c.json(trees);
});

app.get("/trees/:id", (c) => {
  const id = c.req.param("id");
  const tree = trees.find((tree) => tree.id === id);
  if (!tree) {
    return c.json(
      { message: "That tree isn't here!" },
      404
    );
  }
  return c.json(tree);
});

Deno.serve(app.fetch);
