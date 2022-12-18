# Gas Deno Starter

The starter template for Google Apps Script by clasp and deno

## Getting started

### 1. Install Deno

- [Deno.js](https://deno.land/#installation)

### 2. Clone template

Please click
[Use this template](https://github.com/proudust/gas-deno-starter/generate)

or

```
git clone --depth=1 https://github.com/proudust/gas-deno-starter <your_project_name>
cd <your_project_name>
rm -rf .git
```

### 3. Fix LICENSE

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

### 4. Deploy your scripts

**Build and Deploy**

```
deno task deploy
```

```
$ deno task deploy
Task deploy deno task build && deno task build deploy
Task build deno run --allow-env --allow-net --allow-read --allow-run --allow-write --unstable _build.ts
Task build deno run --allow-env --allow-net --allow-read --allow-run --allow-write --unstable _build.ts "deploy"
Warning: Not implemented: process.on("rejectionHandled")
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
