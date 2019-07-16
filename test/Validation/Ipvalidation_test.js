const error = require("../../src/Exception/ipfinderException");
const Ipvalidation = require("../../src/Validation/Ipvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test IP validation", function() {
    assert.isNotNull(new Ipvalidation("1.0.0.0"));
    assert.isObject(new Ipvalidation("5.5.5.5"));
});

it("test IP Exception", function() {
    assert.throws(
        function() {
            new Ipvalidation("5..5.5.5");
        },
        error,
        "Invalid IPaddress"
    );
});
