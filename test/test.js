
/**
 * Module Dependencies
 */

var assert = require('assert');
var fs = require('fs');
var browser = require('../');

/**
 * Fixtures
 */

var input = fs.readFileSync(__dirname + '/fixtures/input.html', 'utf8');
var desiredOutput = JSON.parse(fs.readFileSync(__dirname + '/fixtures/desired_output.json'));

/**
 * Test
 */

assert.deepEqual(browser.parseBody(input), desiredOutput, 'Parsed body data does NOT match the desired output data');