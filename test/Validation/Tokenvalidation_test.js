const error = require("../../src/Exception/ipfinderException");
const Tokenvalidation = require("../../src/Validation/Tokenvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test Asn validation", function() {
    assert.isNotNull(
        new Tokenvalidation("sadddddddddddddddddddddddddddddddddddddddddddddd")
    );
    assert.isObject(
        new Tokenvalidation("sadddddddddddddddddddddddddddddddddddddddddddddd")
    );
});

it("test Token Exception", function() {
    assert.throws(
        function() {
            new Tokenvalidation("free");
        },
        error,
        "Invalid IPFINDER API Token"
    );
});
