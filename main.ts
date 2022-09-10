/// <reference path="https://raw.githubusercontent.com/proudust/deno-gas-types/main/types/index.d.ts" />

declare let global: {
  doGet: (e?: GoogleAppsScript.Events.DoGet) =>
    | GoogleAppsScript.HTML.HtmlOutput
    | GoogleAppsScript.Content.TextOutput;
  doPost: (e?: GoogleAppsScript.Events.DoPost) =>
    | GoogleAppsScript.HTML.HtmlOutput
    | GoogleAppsScript.Content.TextOutput;
  [key: string]: () => void;
};

global.createNewSpreadsheet = () => {
  const spreadsheet = SpreadsheetApp.create("New file");
  spreadsheet.getRange("A1").setValue("Hello World!");
};
