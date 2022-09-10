# Gas Deno Starter

The starter template for Google Apps Script by clasp and deno

## Getting started

### 1. Install JavaScript Runtimes

- [Deno.js](https://deno.land/#installation) - Used by formatter, linter and
  test runner.
- [Node.js](https://nodejs.org/ja/) - Used by deploy to Google Apps Script.

### 2. Clone template

Please click
[Use this template](https://github.com/proudust/gas-deno-starter/generate)

or

```
git clone --depth=1 https://github.com/proudust/gas-deno-starter <your_project_name>
cd <your_project_name>
rm -rf .git
```

### 3. Install dependencies

```
npm ci
```

### 4. Fix LICENSE

**.clasp.json**

[What is Script ID ?](https://github.com/google/clasp#scriptid-required)

```json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "dist"
}
```

**appsscript.json**

[What is appsscript.json ?](https://developers.google.com/apps-script/concepts/manifests)

```
{
  "timeZone": "<Your Time Zone>",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

**LICENSE**

```md
MIT License

Copyright (c) [Year] [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
```

### 5. Deploy your scripts

**Build and Deploy**

```
deno task deploy
```

```
$ deno task deploy
Warning deno task is unstable and may drastically change in the future
Task deploy deno task build && deno task build deploy
Warning deno task is unstable and may drastically change in the future
Task build deno run --allow-env --allow-net --allow-read --allow-run --allow-write --unstable _build.ts
Warning deno task is unstable and may drastically change in the future
Task build deno run --allow-env --allow-net --allow-read --allow-run --allow-write --unstable _build.ts "deploy"
$ npx clasp push -f
- Pushing files…
└─ dist/appsscript.json
└─ dist/out.js
Pushed 2 files.
```

**Build Only**

```
deno task build
```

### Dependencies

- [@google/clasp](https://github.com/google/clasp)
- [esbuild](https://github.com/evanw/esbuild)
- [esbuild-gas-plugin](https://github.com/mahaker/esbuild-gas-plugin)
- [esbuild_plugin_http_fetch](https://github.com/jed/esbuild-plugin-http-fetch)
