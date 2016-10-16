"use strict";

// Mocha will by default use the .babelrc config. However, we also need to transform modules with mocha. This hooks is therefore injected.
require("babel-register")({
	presets: ["es2015", "stage-1"]
});

require("babel-polyfill");

// Prepare the global objects to mimic a browser environment.

// Add a 'window' object.
global.window = {};
// Add a 'navigator' object.
global.navigator = {userAgent: ""};

// Add a 'document' object.
global.document = {
    body: {
        style: ""
    },
		createElement () {return {};},
		getElementsByTagName() {return [{style: {}}];}
};


// Make 'assert' a global object.
global.assert = require("chai").assert;
