const error = require("../../src/Exception/ipfinderException");
const Asnvalidation = require("../../src/Validation/Asnvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test Asn validation", function() {
    assert.isNotNull(Asnvalidation.validate("as1"));
    assert.isTrue(Asnvalidation.validate("AS99"));
});

it("test ASN Exception", function() {
    assert.throws(
        function() {
            Asnvalidation.validate("aaaaaaaaaaaa");
        },
        error,
        "Invalid asn number"
    );
});