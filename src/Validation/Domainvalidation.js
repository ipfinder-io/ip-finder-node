/*
 * Copyright 2019 Mohamed Benrebia <mohamed@ipfinder.io>
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author    Mohamed Benrebia <mohamed@ipfinder.io>
 * @copyright 2019 Mohamed Benrebia
 * @license   https://opensource.org/licenses/Apache-2.0 Apache License, Version 2.0
 * @link      https://ipfinder.io
 */
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