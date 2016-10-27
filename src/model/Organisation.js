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
    define(['ApiClient', 'model/Organisation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Organisation'));
  } else {
    // Browser globals (root is window)
    if (!root.SynactaClientJs) {
      root.SynactaClientJs = {};
    }
    root.SynactaClientJs.Organisation = factory(root.SynactaClientJs.ApiClient, root.SynactaClientJs.Organisation);
  }
}(this, function(ApiClient, Organisation) {
  'use strict';




  /**
   * The Organisation model module.
   * @module model/Organisation
   * @version v1
   */

  /**
   * Constructs a new <code>Organisation</code>.
   * @alias module:model/Organisation
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Organisation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Organisation} obj Optional instance to populate.
   * @return {module:model/Organisation} The populated <code>Organisation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('ParentID')) {
        obj['ParentID'] = ApiClient.convertToType(data['ParentID'], 'String');
      }
      if (data.hasOwnProperty('ParentName')) {
        obj['ParentName'] = ApiClient.convertToType(data['ParentName'], 'String');
      }
      if (data.hasOwnProperty('HasChildren')) {
        obj['HasChildren'] = ApiClient.convertToType(data['HasChildren'], 'Boolean');
      }
      if (data.hasOwnProperty('Children')) {
        obj['Children'] = ApiClient.convertToType(data['Children'], [Organisation]);
      }
      if (data.hasOwnProperty('@odata.count')) {
        obj['@odata.count'] = ApiClient.convertToType(data['@odata.count'], 'Integer');
      }
      if (data.hasOwnProperty('@odata.context')) {
        obj['@odata.context'] = ApiClient.convertToType(data['@odata.context'], 'String');
      }
      if (data.hasOwnProperty('@odata.readLink')) {
        obj['@odata.readLink'] = ApiClient.convertToType(data['@odata.readLink'], 'String');
      }
      if (data.hasOwnProperty('Child@odata.navigationLink')) {
        obj['Child@odata.navigationLink'] = ApiClient.convertToType(data['Child@odata.navigationLink'], 'String');
      }
      if (data.hasOwnProperty('Parent@odata.navigationLink')) {
        obj['Parent@odata.navigationLink'] = ApiClient.convertToType(data['Parent@odata.navigationLink'], 'String');
      }
      if (data.hasOwnProperty('FullODataLink@odata.navigationLink')) {
        obj['FullODataLink@odata.navigationLink'] = ApiClient.convertToType(data['FullODataLink@odata.navigationLink'], 'String');
      }
      if (data.hasOwnProperty('StandardODataLink@odata.navigationLink')) {
        obj['StandardODataLink@odata.navigationLink'] = ApiClient.convertToType(data['StandardODataLink@odata.navigationLink'], 'String');
      }
      if (data.hasOwnProperty('NoneODataLink@odata.navigationLink')) {
        obj['NoneODataLink@odata.navigationLink'] = ApiClient.convertToType(data['NoneODataLink@odata.navigationLink'], 'String');
      }
      if (data.hasOwnProperty('@odata.editLink')) {
        obj['@odata.editLink'] = ApiClient.convertToType(data['@odata.editLink'], 'String');
      }
      if (data.hasOwnProperty('@odata.etag')) {
        obj['@odata.etag'] = ApiClient.convertToType(data['@odata.etag'], 'String');
      }
      if (data.hasOwnProperty('@odata.metadataEtag')) {
        obj['@odata.metadataEtag'] = ApiClient.convertToType(data['@odata.metadataEtag'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} ParentID
   */
  exports.prototype['ParentID'] = undefined;
  /**
   * @member {String} ParentName
   */
  exports.prototype['ParentName'] = undefined;
  /**
   * @member {Boolean} HasChildren
   */
  exports.prototype['HasChildren'] = undefined;
  /**
   * @member {Array.<module:model/Organisation>} Children
   */
  exports.prototype['Children'] = undefined;
  /**
   * @member {Integer} @odata.count
   */
  exports.prototype['@odata.count'] = undefined;
  /**
   * @member {String} @odata.context
   */
  exports.prototype['@odata.context'] = undefined;
  /**
   * @member {String} @odata.readLink
   */
  exports.prototype['@odata.readLink'] = undefined;
  /**
   * @member {String} Child@odata.navigationLink
   */
  exports.prototype['Child@odata.navigationLink'] = undefined;
  /**
   * @member {String} Parent@odata.navigationLink
   */
  exports.prototype['Parent@odata.navigationLink'] = undefined;
  /**
   * @member {String} FullODataLink@odata.navigationLink
   */
  exports.prototype['FullODataLink@odata.navigationLink'] = undefined;
  /**
   * @member {String} StandardODataLink@odata.navigationLink
   */
  exports.prototype['StandardODataLink@odata.navigationLink'] = undefined;
  /**
   * @member {String} NoneODataLink@odata.navigationLink
   */
  exports.prototype['NoneODataLink@odata.navigationLink'] = undefined;
  /**
   * @member {String} @odata.editLink
   */
  exports.prototype['@odata.editLink'] = undefined;
  /**
   * @member {String} @odata.etag
   */
  exports.prototype['@odata.etag'] = undefined;
  /**
   * @member {String} @odata.metadataEtag
   */
  exports.prototype['@odata.metadataEtag'] = undefined;



  return exports;
}));


