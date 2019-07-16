const error = require("../Exception/ipfinderException");

/**
 * Helper method for validating an argument if it is asn number
 * @class
 * @version 1.0.0
 * @author Mohamed Ben rebia <mohamed@ipfinder.io>
 */
class Asnvalidation {
    /**
     * @param  {string} asn The AS number you want details for
     * @return {boolean}
     * @throws {ipfinderException}
     * @see  for regex asn number.
     * @see {@link https://github.com/ipfinder-io/ip-finder-php/blob/master/src/Validation/Asnvalidation.php/|GitHub}
     */
    constructor(asn) {
        if (/^(as|AS)(\d+)$/.test(asn) === false) {
            throw new error("Invalid asn number");
        }
        return true;
    }
}

module.exports = Asnvalidation;
