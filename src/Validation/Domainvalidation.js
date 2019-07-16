const error = require("../Exception/ipfinderException");

/**
 * Helper method for validating domain name
 * @class
 * @version 1.0.0
 * @author Mohamed Ben rebia <mohamed@ipfinder.io>
 */
class Domainvalidation {
    /**
     * @param  {string} domain  passing in a single website name domain name
     * @return {boolean}
     * @throws {ipfinderException}
     * @see  for regex domain name.
     * @see {@link https://github.com/ipfinder-io/ip-finder-php/blob/master/src/Validation/Domainvalidation.php/|GitHub}
     */
    constructor(domain) {
        if (
            /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/.test(
                domain
            ) === false
        ) {
            throw new error("Invalid Domain name");
        }
        return true;
    }
}

module.exports = Domainvalidation;
