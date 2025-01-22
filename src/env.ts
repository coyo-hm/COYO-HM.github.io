import * as process from "process";

const dev = "development";
// const beta = "test";
// const production = "production";
// const local = "local";

const LEVEL = process.env.NODE_ENV ? String(process.env.NODE_ENV) : dev;

if (LEVEL !== dev) {
  console.log = function () {};
  console.warn = function () {};
  console.debug = function () {};
}

export const ENV = {
  LEVEL,
};
