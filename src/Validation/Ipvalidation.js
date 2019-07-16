const error = require("../Exception/ipfinderException");

/**
 *
 * @class
 * @version 1.0.0
 * @author Mohamed Ben rebia <mohamed@ipfinder.io>
 */
class Ipvalidation {
    /**
     * @param  {string} ipaddress single IPv4 or IPv6 IP address
     * @return {boolean}
     * @throws {ipfinderException}
     * @see  for regex ipregex.
     * @see {@link http://ipregex.com/|Ipregex}
     */
    constructor(ipaddress) {
        if (
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                ipaddress
            ) === false
        ) {
            throw new error("Invalid IPaddress");
        }
        return true;
    }
}
module.exports = Ipvalidation;
