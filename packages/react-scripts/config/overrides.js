/**
 * Allow apply some overrides without ejecting
 * Absolute dangerously option
 *
 * It's not part of facebooks's CRA
 */
'use strict';
const paths = require('./paths');
const chalk = require('react-dev-utils/chalk');

function init() {
  const overrides = require(paths.appPackageJson).webpackOverrides;

  if (overrides) {
    console.log(
      chalk.yellow(
        "Will apply webpack's config overrides from package.json.\n"
      ),
      chalk.yellow.bold("Please be aware: it's dangerous.\n")
    );

    wait(5000);

    return overrides;
  }

  return {};
}

const overrides = init();

module.exports = overrides;

function wait(ms) {
  const timeout = Date.now() + ms;

  while (Date.now() < timeout) {
    process.nextTick(Function.prototype);
  }
}
