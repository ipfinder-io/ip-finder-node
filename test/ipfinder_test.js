// require("dotenv").config({ path: "./test/.env" });

const error = require("../src/Exception/ipfinderException");
const Ipfinder = require("../src/ipfinder");

const assertions = require("mocha").it;
const assert = require("chai").assert;

// const token_global = new Ipfinder(process.env.IPFINDER_API_KEY_PROFESSIONAL);

it("test Token", function() {
    var token = "asdasdasdasdasdsdasdasdasdasdasdasdasdasd";
    var api = new Ipfinder(token);
    assert.deepEqual(api.token, token);
});

it("test Free Token", function() {
    var token = "free";
    var api = Ipfinder.DEFAULT_API_TOKEN;
    assert.deepEqual(api, token);
});

it("test Bad Token", function() {
    assert.throws(
        function() {
            new Ipfinder("asd");
        },
        error,
        "Invalid IPFINDER API Token"
    );
});

it("test BaseUrl", function() {
    var cons = "https://api.ipfinder.io/v1/";
    var api = Ipfinder.DEFAULT_BASE_URL;
    assert.deepEqual(api, cons);
});

it("test Get Status", function() {
    var cons = "info";
    var api = Ipfinder.STATUS_PATH;
    assert.deepEqual(api, cons);
});

it("test Get Ranges", function() {
    var cons = "ranges/";
    var api = Ipfinder.RANGES_PATH;
    assert.deepEqual(api, cons);
});

it("test Get Firewall", function() {
    var cons = "firewall/";
    var api = Ipfinder.FIREWALL_PATH;
    assert.deepEqual(api, cons);
});

it("test Get Domain", function() {
    var cons = "domain/";
    var api = Ipfinder.DOMAIN_PATH;
    assert.deepEqual(api, cons);
});

it("test Get DomainHistory", function() {
    var cons = "domainhistory/";
    var api = Ipfinder.DOMAIN_H_PATH;
    assert.deepEqual(api, cons);
});

it("test Get DomainBy", function() {
    var cons = "domainby/";
    var api = Ipfinder.DOMAIN_BY_PATH;
    assert.deepEqual(api, cons);
});

it("test Address getAddressInfo Exception", function() {
    var ip = "1..0.0.0";
    var ipfinder = new Ipfinder();
    assert.throws(
        function() {
            ipfinder.getAddressInfo(ip).then(data => {});
        },
        error,
        "Invalid IPaddress"
    );
});

it("test Asn getAsn Exception ", function() {
    var asn = "ip";
    var ipfinder = new Ipfinder();
    assert.throws(
        function() {
            ipfinder.getAsn(asn).then(data => {});
        },
        error,
        "Invalid asn number"
    );
});

it("test Domain getDomainHistory and getDomain Exception", function() {
    var domain = "fsdf";
    var ipfinder = new Ipfinder();
    assert.throws(
        function() {
            ipfinder.getDomain(domain).then(data => {});
        },
        error,
        "Invalid Domain name"
    );
    assert.throws(
        function() {
            ipfinder.getDomainHistory(domain).then(data => {});
        },
        error,
        "Invalid Domain name"
    );
});

it("test Firewall Format getFirewall Exception", function() {
    var format = "asdasd";
    var ipfinder = new Ipfinder();
    assert.throws(
        function() {
            ipfinder.getFirewall("as1", format).then(data => {});
        },
        error,
        "Invalid Format supported format https://ipfinder.io/docs/?shell#firewall"
    );
});

it("test Firewall By getFirewall Exception", function() {
    var country = "DZZ"; // country , ASN
    var ipfinder = new Ipfinder();
    assert.throws(
        function() {
            ipfinder.getFirewall(country, "juniper_junos").then(data => {});
        },
        error,
        "Invalid Firewall string please use AS number or ISO 3166-1 alpha-2 country"
    );
});

// hate the tests
