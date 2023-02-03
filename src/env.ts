const dev = "dev";
const beta = "beta";
const production = "production";
const local = "local";

const LEVEL = process.env.REACT_APP_VERSION
  ? String(process.env.REACT_APP_VERSION)
  : dev;

if (LEVEL !== dev) {
  console.log = function () {};
  console.warn = function () {};
  console.debug = function () {};
}

export const ENV = {
  LEVEL,
};
