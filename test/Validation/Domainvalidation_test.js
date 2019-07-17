const error = require("../../src/Exception/ipfinderException");
const Domainvalidation = require("../../src/Validation/Domainvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test Domain validation", function() {
    assert.isNotNull(Domainvalidation.validate("google.com"));
    assert.isTrue(Domainvalidation.validate("google.com"));
});

it("test Domain Exception", function() {
    assert.throws(
        function() {
            Domainvalidation.validate("google.");
        },
        error,
        "Invalid Domain name"
    );
});