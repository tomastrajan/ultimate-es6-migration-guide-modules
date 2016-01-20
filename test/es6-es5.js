
import assert from "assert";

import es5 from '../lib/module-es5';
import * as es5star from '../lib/module-es5';
import { testFunction, testVar, testObject } from '../lib/module-es5';

import es5exports from '../lib/module-es5-exports';
import * as es5starExports from '../lib/module-es5-exports';
import { testProp, testMethod } from '../lib/module-es5-exports';

describe("ES6 module importing ES5 module with exports. syntax", function() {

    describe("ES6 module importing ES5 module as default import", function() {

        it("imports ES5 module and checks exported function", function() {
            assert.equal(es5.testFunction(), "testFunction");
        });

        it("imports ES5 module and checks exported var", function() {
            assert.equal(es5.testVar, "testVar");
        });

        it("imports ES5 module and checks exported object", function() {
            assert.equal(es5.testObject.testProp, "testProp");
            assert.equal(es5.testObject.testMethod(), "testMethod");
        });

    });

    describe("ES6 module importing ES5 module with * as", function() {

        it("imports ES5 module and checks exported function", function() {
            assert.equal(es5star.testFunction(), "testFunction");
        });

        it("imports ES5 module and checks exported var", function() {
            assert.equal(es5star.testVar, "testVar");
        });

        it("imports ES5 module and checks exported object", function() {
            assert.equal(es5star.testObject.testProp, "testProp");
            assert.equal(es5star.testObject.testMethod(), "testMethod");
        });

    });

    describe("ES6 module importing ES5 module with destructuring", function() {

        it("imports ES5 module and checks exported function", function() {
            assert.equal(testFunction(), "testFunction");
        });

        it("imports ES5 module and checks exported var", function() {
            assert.equal(testVar, "testVar");
        });

        it("imports ES5 module and checks exported object", function() {
            assert.equal(testObject.testProp, "testProp");
            assert.equal(testObject.testMethod(), "testMethod");
        });

    });

});
describe("ES6 module importing ES5 module with module.exports = syntax", function() {

    describe("ES6 module importing ES5 module with destructuring", function() {

        it("imports ES5 module and checks exported prop", function() {
            assert.equal(testProp, "testProp");
        });

        it("imports ES5 module and checks exported method", function() {
            assert.equal(testMethod(), "testMethod");
        });

    });

});
