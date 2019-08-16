'use strict';

module.exports = cacheDirectory;

// I would to find better way to configure caches in CI mode, due to defaults
// places, like ./node_modules/** not very suitable for keep in external cache
// and could be simple lost by numbers of ways, e.g. npm install, runner could
// remove node_modules, create node_modules symlink, etc.
function cacheDirectory(subId, defaultValue = true) {
  return process.env.CACHE_ROOT
    ? `${process.env.CACHE_ROOT}/${subId}`
    : defaultValue;
}
