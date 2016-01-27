"use strict";

var assert = require("assert");
var es6 = require('../lib/module-es6');

describe("ES5 module importing ES6 module", () => {

    it("checks exported function", () => {
        assert.equal(es6.testFunction(), "testFunction");
    });

    it("checks exported const", () => {
        assert.equal(es6.testConst, "testConst");
    });

    it("checks exported let", () => {
        assert.equal(es6.testLet, "testLet");
    });

    it("checks exported var", () => {
        assert.equal(es6.testVar, "testVar");
    });

    it("checks exported class", () => {
        assert.equal(new es6.TestClass().testProp, "testProp");
    });

    it("checks default export - only explicit \"default\" call, by default NOT backward compatible", () => {
        assert.equal(es6.default(), "defaultTestFunction");
    });

});
