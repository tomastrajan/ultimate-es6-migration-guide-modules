
var assert = require("assert");
var es6 = require('../lib/module-es6');

describe("ES5 module importing ES6 module", function() {

    it("imports ES6 module and checks exported function", function() {
        assert.equal(es6.testFunction(), "testFunction");
    });

    it("imports ES6 module and checks exported const", function() {
        assert.equal(es6.testConst, "testConst");
    });

    it("imports ES6 module and checks exported let", function() {
        assert.equal(es6.testLet, "testLet");
    });

    it("imports ES6 module and checks exported var", function() {
        assert.equal(es6.testVar, "testVar");
    });

    it("imports ES6 module and checks exported class", function() {
        assert.equal(new es6.TestClass().testProp, "testProp");
    });

    it("imports ES6 module and checks default export", function() {
        assert.equal(es6.default(), "defaultTestFunction");

    });

});
