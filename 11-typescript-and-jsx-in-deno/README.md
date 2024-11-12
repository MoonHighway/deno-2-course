# 11 - TypeScript and JSX in Deno

🎥 [Watch on YouTube](https://www.youtube.com/watch?v=KoM8ahe8O74&list=PLvvLnBDNuTEov9EBIp3MMfHlBxaKGRWTe&index=11&pp=iAQB)

In this tutorial, learn how to natively process TypeScript and JSX using Deno without needing additional tools like ts-node or tsconfig. We'll demonstrate type checking with Deno commands, customize TypeScript compiler settings using the deno.json file, and handle imports for libraries such as React. Discover how Deno simplifies TypeScript and JSX development, offering powerful configuration and support for different environments.

## Running a TypeScript Check

```bash
deno check sing.ts
```
Or to check then run:

```bash
deno --check sing.ts
```

* Other important commands:

```
# or also type check remote modules and npm packages
deno check --all module.ts
# code snippets written in JSDoc can also be type checked
deno check --doc module.ts
# or type check code snippets in markdown files
deno check --doc-only markdown.md
```


## Important Links 🔗

* [Configuring TypeScript](https://docs.deno.com/runtime/reference/ts_config_migration/)
* [JSX Reference](https://docs.deno.com/runtime/reference/jsx/)