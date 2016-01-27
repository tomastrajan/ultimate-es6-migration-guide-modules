import assert from "assert";

import es5 from "../lib/module-es5";
import * as es5star from "../lib/module-es5";
import { testFunction, testVar, testObject } from "../lib/module-es5";

import es5exports from "../lib/module-es5-exports";
import * as es5starExports from "../lib/module-es5-exports";
import { testProp, testMethod } from "../lib/module-es5-exports";

describe("ES6 module importing ES5 module with \"exports.\" syntax", () => {

    describe("import es5 from \"../lib/module-es5\";", () => {

        it("checks exported function", () => {
            assert.equal(es5.testFunction(), "testFunction");
        });

        it("checks exported var", () => {
            assert.equal(es5.testVar, "testVar");
        });

        it("checks exported object", () => {
            assert.equal(es5.testObject.testProp, "testProp");
            assert.equal(es5.testObject.testMethod(), "testMethod");
        });

    });

    describe("import * as es5star from \"../lib/module-es5\";", () => {

        it("checks exported function", () => {
            assert.equal(es5star.testFunction(), "testFunction");
        });

        it("checks exported var", () => {
            assert.equal(es5star.testVar, "testVar");
        });

        it("checks exported object", () => {
            assert.equal(es5star.testObject.testProp, "testProp");
            assert.equal(es5star.testObject.testMethod(), "testMethod");
        });

    });

    describe("import { testFunction, testVar, testObject } from \"../lib/module-es5\";", () => {

        it("checks exported function", () => {
            assert.equal(testFunction(), "testFunction");
        });

        it("checks exported var", () => {
            assert.equal(testVar, "testVar");
        });

        it("checks exported object", () => {
            assert.equal(testObject.testProp, "testProp");
            assert.equal(testObject.testMethod(), "testMethod");
        });

    });

});
describe("ES6 module importing ES5 module with \"module.exports =\" syntax", () => {

    describe("import es5exports from \"../lib/module-es5-exports\";", () => {

        it("checks exported prop", () => {
            assert.equal(es5exports.testProp, "testProp");
        });

        it("checks exported method", () => {
            assert.equal(es5exports.testMethod(), "testMethod");
        });

    });

    describe("import * as es5starExports from \"../lib/module-es5-exports\";", () => {

        it("checks exported prop", () => {
            assert.equal(es5starExports.testProp, "testProp");
        });

        it("checks exported method", () => {
            assert.equal(es5starExports.testMethod(), "testMethod");
        });

    });

    describe("import { testProp, testMethod } from \"../lib/module-es5-exports\";", () => {

        it("checks exported prop", () => {
            assert.equal(testProp, "testProp");
        });

        it("checks exported method", () => {
            assert.equal(testMethod(), "testMethod");
        });

    });

});
