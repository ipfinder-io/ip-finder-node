const error = require("../Exception/ipfinderException");

/**
 *
 * @class
 * @version 1.0.0
 * @author Mohamed Ben rebia <mohamed@ipfinder.io>
 */
class Tokenvalidation {
    /**
     * @param  {string} token Your API key or the string "free" for the free API
     * @return {boolean}
     * @throws {ipfinderException}
     */
    constructor(token) {
        if (token.length <= 25) {
            throw new error("Invalid IPFINDER API Token");
        }
        return true;
    }
}

module.exports = Tokenvalidation;
