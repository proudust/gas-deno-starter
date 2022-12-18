import gasPlugin from "https://esm.sh/esbuild-gas-plugin@0.5.0/mod.ts";
import httpPlugin from "https://deno.land/x/esbuild_plugin_http_fetch@v1.0.3/index.js";
import { parse } from "https://deno.land/std@0.155.0/flags/mod.ts";
import { build } from "https://deno.land/x/esbuild@v0.15.16/mod.js";
import $ from "https://deno.land/x/dax@0.17.0/mod.ts";

const command = parse(Deno.args, {})._[0] || "build";
switch (command) {
  case "build": {
    await Promise.all([
      build({
        bundle: true,
        charset: "utf8",
        entryPoints: ["main.ts"],
        outfile: "dist/out.js",
        target: "es2017", // Workaround for jquery/esprima#2034
        plugins: [
          httpPlugin,
          gasPlugin,
        ],
      }),
      (async function copy() {
        await Deno.mkdir("dist", { recursive: true });
        await Deno.copyFile("appsscript.json", "dist/appsscript.json");
      })(),
    ]);
    Deno.exit();
    break;
  }

  case "deploy": {
    await $`deno run --allow-env --allow-net --allow-read --allow-sys --allow-write npm:@google/clasp@2.4.2 push -f`
      .stdin("\n");
    break;
  }

  default: {
    console.error(`Error: Unknown command: ${command}`);
  }
}
