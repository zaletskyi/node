'use strict';

// Flags: --expose-internals --experimental-worker

require('../common');
const { WPTRunner } = require('../common/wpt');

const runner = new WPTRunner('console');

// Copy global descriptors from the global object
runner.copyGlobalsFromObject(global, ['console']);

runner.runJsTests();
