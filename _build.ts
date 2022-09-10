import gasPlugin from "https://cdn.esm.sh/esbuild-gas-plugin@0.4.0/mod.ts";
import httpPlugin from "https://deno.land/x/esbuild_plugin_http_fetch@v1.0.3/index.js";
import { parse } from "https://deno.land/std@0.155.0/flags/mod.ts";
import { build } from "https://deno.land/x/esbuild@v0.12.15/mod.js";
import { $ } from "https://deno.land/x/zx_deno@1.2.2/mod.mjs";

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
    await $`npx clasp push -f`;
    break;
  }

  default: {
    console.error(`Error: Unknown command: ${command}`);
  }
}
