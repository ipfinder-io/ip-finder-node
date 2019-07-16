const error = require("../../src/Exception/ipfinderException");
const Asnvalidation = require("../../src/Validation/Asnvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test Asn validation", function() {
    assert.isNotNull(new Asnvalidation("as1"));
    assert.isObject(new Asnvalidation("as1"));
});

it("test ASN Exception", function() {
    var as1 = "asasdasd1";
    assert.throws(
        function() {
            new Asnvalidation(as1);
        },
        error,
        "Invalid asn number"
    );
});
