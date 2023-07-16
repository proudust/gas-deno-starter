# Gas Deno Starter

The starter template for Google Apps Script by clasp and deno

## Getting started

### 1. Install Deno

[How to install Deno](https://deno.land/manual/getting_started/installation)

### 2. Clone template

Please click
[Use this template](https://github.com/proudust/gas-deno-starter/generate)

or

Run on your terminal:

```sh
git clone --depth=1 https://github.com/proudust/gas-deno-starter <your_project_name>
cd <your_project_name>
rm -rf .git
```

### 3. Login @google/clasp

Run on your terminal:

```sh
deno run -A npm:@google/clasp@2.4.2 login
```

After login, `~/.clasprc.json` will be generated. If you want to deploy Google
Apps Script from GitHub Actions, paste the contents of `~/.clasprc.json` into
your repository secrets with the name `CLASPRC`.

### 4. Change Template Files

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

```json
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

```sh
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

```sh
deno task build
```

### Dependencies

- [@google/clasp](https://github.com/google/clasp)
- [esbuild](https://github.com/evanw/esbuild)
- [esbuild_deno_loader](https://github.com/lucacasonato/esbuild_deno_loader)
- [esbuild-gas-plugin](https://github.com/mahaker/esbuild-gas-plugin)
