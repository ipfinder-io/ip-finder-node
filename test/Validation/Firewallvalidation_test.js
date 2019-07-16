const error = require("../../src/Exception/ipfinderException");
const Firewallvalidation = require("../../src/Validation/Firewallvalidation");

const assertions = require("mocha").it;
const assert = require("chai").assert;

it("test Firewall validation", function() {
    assert.isNotNull(new Firewallvalidation("as1", "juniper_junos"));
    assert.isObject(new Firewallvalidation("DZ", "juniper_junos"));
});

it("test Firewall Exception", function() {
    assert.throws(
        function() {
            new Firewallvalidation("as1", "sssssss");
        },
        error,
        "Invalid Format supported format https://ipfinder.io/docs/?shell#firewall"
    );
});
