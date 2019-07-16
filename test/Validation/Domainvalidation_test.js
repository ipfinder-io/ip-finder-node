const error = require("../../src/Exception/ipfinderException");
const Domainvalidation = require("../../src/Validation/Domainvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test Domain validation", function() {
    assert.isNotNull(new Domainvalidation("google.com"));
    assert.isObject(new Domainvalidation("google.com"));
});

it("test Domain Exception", function() {
    assert.throws(
        function() {
            new Domainvalidation("google.");
        },
        error,
        "Invalid Domain name"
    );
});
