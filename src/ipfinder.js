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


const fetch = require("node-fetch");

const error = require("./Exception/ipfinderException");
const Asnvalidation = require("./Validation/Asnvalidation");
const Domainvalidation = require("./Validation/Domainvalidation");
const Firewallvalidation = require("./Validation/Firewallvalidation");
const Ipvalidation = require("./Validation/Ipvalidation");
const Tokenvalidation = require("./Validation/Tokenvalidation");

/**
 * DEFAULT BASE URL
 * @constant
 * @type {string}
 * @default
 */
const DEFAULT_BASE_URL = "https://api.ipfinder.io/v1/"; // or add proxy pass with your domain

/**
 * The free token
 * @constant
 * @type {string}
 * @default
 */

const DEFAULT_API_TOKEN = "free"; //  limited to 4,000 requests a day

/**
 * DEFAULT FORMAT
 * @constant
 * @type {string}
 * @default
 */
const FORMAT = "json";

/**
 * service status path
 * @constant
 * @type {string}
 * @default
 */
const STATUS_PATH = "info";

/**
 * IP Address Ranges path
 * @constant
 * @type {string}
 * @default
 */
const RANGES_PATH = "ranges/";

/**
 * Firewall path
 * @constant
 * @type {string}
 * @default
 */
const FIREWALL_PATH = "firewall/";

/**
 * Get Domain IP path
 * @constant
 * @type {string}
 * @default
 */
const DOMAIN_PATH = "domain/";

/**
 * Get Domain IP history path
 * @constant
 * @type {string}
 * @default
 */
const DOMAIN_H_PATH = "domainhistory/";

/**
 * Domain By ASN, Country,Ranges path
 * @constant
 * @type {string}
 * @default
 */
const DOMAIN_BY_PATH = "domainby/";

/**
 * The Ipfinder API class
 * @class
 * @version 1.0.0
 * @author Mohamed Ben rebia <mohamed@ipfinder.io>
 */

class Ipfinder {
    static get DEFAULT_BASE_URL() {
        return DEFAULT_BASE_URL;
    }

    static get DEFAULT_API_TOKEN() {
        return DEFAULT_API_TOKEN;
    }

    static get FORMAT() {
        return FORMAT;
    }

    static get STATUS_PATH() {
        return STATUS_PATH;
    }

    static get RANGES_PATH() {
        return RANGES_PATH;
    }

    static get FIREWALL_PATH() {
        return FIREWALL_PATH;
    }

    static get DOMAIN_PATH() {
        return DOMAIN_PATH;
    }

    static get DOMAIN_H_PATH() {
        return DOMAIN_H_PATH;
    }

    static get DOMAIN_BY_PATH() {
        return DOMAIN_BY_PATH;
    }

    /**
     * Constructor
     * @param  {string|null} token   add your token
     * @param  {string|null} baseUrl add proxy pass
     * @throws {ipfinderException}
     */
    constructor(token = null, baseUrl = null) {
        if (token === null) {
            this.token = Ipfinder.DEFAULT_API_TOKEN;
        } else {
            new Tokenvalidation(token);
            this.token = token;
        }
        if (baseUrl === null) {
            this.baseUrl = Ipfinder.DEFAULT_BASE_URL;
        } else {
            this.baseUrl = baseUrl;
        }
    }

    /**
     *
     * @param  {string|null} path     specific path of asn, IP address, ranges, Firewall,Token status
     * @param  {string|null} format   available format `json` `jsonp` `php` `xml`
     * @throws {ipfinderException}
     * @return {Promise<object>}
     * @example
     * API.call("google.com", 'php');
     */
    call(path = null, format = null) {
        if (format === null) {
            this.format = Ipfinder.FORMAT;
        } else {
            this.format = format;
        }

        var headers = {
            //    'X-Authorization' :'$this->token',
            "Content-type": "application/json",
            "User-Agent": "IPfinder nodejs-client"
        };

        var fields = `{"token": "${this.token}", "format": "${this.format}"}`;

        return fetch(this.baseUrl + path, {
            method: "POST",
            headers: headers,
            body: fields
        })
            .then(result => result.json())
            .then(result => {
                if (result.error) return Promise.reject(result.error); // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
                return result;
            });
    }

    /**
     * Get details for an Your IP address.
     * @return {Promise<object>} Your IP address data.
     * @example
     * API.Authentication();
     *
     */
    Authentication() {
        return this.call("", "");
    }

    /**
     * Get details for an IP address.
     * @param  {string} path  IP address.
     * @throws {ipfinderException}
     * @return {Promise<object>}   IP address data.
     * @example
     * API.getAddressInfo('1.0.0.0');
     *
     */
    getAddressInfo(path) {
        new Ipvalidation(path);
        return this.call(path);
    }

    /**
     * Get details for an AS number.
     * @param  {string} path AS number.
     * @throws {ipfinderException}
     * @return {Promise<object>} AS number data.
     * @example
     * API.getAsn("AS1");
     */
    getAsn(path) {
        new Asnvalidation(path);
        return this.call(path);
    }

    /**
     * Get details for an API Token .
     * @return {Promise<object>} The Token data.
     * @example
     * API.getStatus();
     *
     */
    getStatus() {
        return this.call(Ipfinder.STATUS_PATH);
    }

    /**
     * Get details for an Organization name.
     * @param  {string} path  Organization name.
     * @return {Promise<object>}  Organization name data.
     * @example
     * API.getRanges("Telecom Algeria");
     *
     */
    getRanges(path) {
        return this.call(Ipfinder.RANGES_PATH + encodeURI(path));
    }

    /**
     * Get Firewall data
     * @param  {string} path    AS number, alpha-2 country only.
     * @param  {string} formats list formats supported
     * @throws {ipfinderException}
     * @return {Promise<object>} Firewall data.
     * @example
     * API.getFirewall("DZ",'nginx_deny');
     *
     */
    getFirewall(path, formats) {
        new Firewallvalidation(path, formats);
        return this.call(Ipfinder.FIREWALL_PATH + path, formats);
    }

    /**
     * Get Domain IP
     * @param  {string} path   The API supports passing in a single website name domain name
     * @throws {ipfinderException}
     * @return {Promise<object>}  Domain to IP data.
     * @example
     * API.getDomain("google.com");
     *
     */
    getDomain(path) {
        new Domainvalidation(path);
        return this.call(Ipfinder.DOMAIN_PATH + path);
    }

    /**
     * [getDomainHistory description]
     * @param  {string} path  The API supports passing in a single website name domain name
     * @throws {ipfinderException}
     * @return {Promise<object>}   Domain History data.
     * @example
     * API.getDomainHistory("google.com");
     *
     */
    getDomainHistory(path) {
        new Domainvalidation(path);
        return this.call(Ipfinder.DOMAIN_H_PATH + path);
    }

    /**
     * Get list Domain By ASN, Country,Ranges
     * @param  {string} by The API supports passing in a single ASN,Country,Ranges
     * @return {Promise<object>} Get list Domain By ASN, Country,Ranges
     * @example
     * API.getDomainBy("DZ");
     *
     */
    getDomainBy(by) {
        return this.call(Ipfinder.DOMAIN_BY_PATH + by);
    }
}

Ipfinder.error = error;
Ipfinder.Asnvalidation = Asnvalidation;
Ipfinder.Domainvalidation = Domainvalidation;
Ipfinder.Firewallvalidation = Firewallvalidation;
Ipfinder.Ipvalidation = Ipvalidation;
Ipfinder.Tokenvalidation = Tokenvalidation;

module.exports = Ipfinder;