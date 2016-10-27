/**
 * synacta-client-js
 * WebApi
 *
 * OpenAPI spec version: v1
 * Contact: bhofmann@agile-is.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Log'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Log'));
  } else {
    // Browser globals (root is window)
    if (!root.SynactaClientJs) {
      root.SynactaClientJs = {};
    }
    root.SynactaClientJs.LoggingApi = factory(root.SynactaClientJs.ApiClient, root.SynactaClientJs.Log);
  }
}(this, function(ApiClient, Log) {
  'use strict';

  /**
   * Logging service.
   * @module api/LoggingApi
   * @version v1
   */

  /**
   * Constructs a new LoggingApi. 
   * @alias module:api/LoggingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiLogAddGet operation.
     * @callback module:api/LoggingApi~apiLogAddGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Log} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the log container.
     * @param {String} authorization access token
     * @param {module:api/LoggingApi~apiLogAddGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Log}
     */
    this.apiLogAddGet = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiLogAddGet";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = Log;

      return this.apiClient.callApi(
        '/_api/log/Add', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiLogAddPut operation.
     * @callback module:api/LoggingApi~apiLogAddPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Log} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds the log.
     * @param {String} authorization access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Log} opts.log The log.
     * @param {module:api/LoggingApi~apiLogAddPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Log}
     */
    this.apiLogAddPut = function(authorization, opts, callback) {
      opts = opts || {};
      var postBody = opts['log'];

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiLogAddPut";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = Log;

      return this.apiClient.callApi(
        '/_api/log/Add', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiLogGet operation.
     * @callback module:api/LoggingApi~apiLogGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Log>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all logs.
     * @param {String} authorization access token
     * @param {module:api/LoggingApi~apiLogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Log>}
     */
    this.apiLogGet = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiLogGet";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [Log];

      return this.apiClient.callApi(
        '/_api/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
