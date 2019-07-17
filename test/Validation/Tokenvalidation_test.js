const error = require("../../src/Exception/ipfinderException");
const Tokenvalidation = require("../../src/Validation/Tokenvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test Asn validation", function() {
    assert.isNotNull(
        Tokenvalidation.validate(
            "sadddddddddddddddddddddddddddddddddddddddddddddd"
        )
    );
    assert.isTrue(
        Tokenvalidation.validate(
            "sadddddddddddddddddddddddddddddddddddddddddddddd"
        )
    );
});

it("test Token Exception", function() {
    assert.throws(
        function() {
            Tokenvalidation.validate("free");
        },
        error,
        "Invalid IPFINDER API Token"
    );
});