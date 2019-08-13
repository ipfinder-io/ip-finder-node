const path = require("path");
const defaults = require("lodash.defaultsdeep");
const uglifyjs_plugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const UglifyJsPlugin = require("webpack-hashed-chunk-id-plugin");

const ban = `/*
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
 */`;

const base = {
    entry: "./src/ipfinder.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        library: "Ipfinder",
        libraryTarget: "umd"
    }
};

const prod = defaults({}, base, {
    output: {
        filename: "ipfinder.min.js"
    },
    mode: "production",
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: ban
        })
    ]
});

const dev = defaults({}, base, {
    output: {
        filename: "ipfinder.js",
        jsonpFunction:  'wpJsonpIpfinder'
    },
    devtool: "source-map",
    mode: "development",
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin({
            hashFunction: "sha256"
        }),
        new webpack.BannerPlugin({
            raw: false,
            banner: ban
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                sourceMap: true,
                parallel: true,
                uglifyOptions: {
                    output: {
                        comments: false,
                    }
                }
            })
        ]
    }
});

module.exports = [prod, dev];