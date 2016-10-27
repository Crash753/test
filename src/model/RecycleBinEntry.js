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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SynactaClientJs) {
      root.SynactaClientJs = {};
    }
    root.SynactaClientJs.RecycleBinEntry = factory(root.SynactaClientJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RecycleBinEntry model module.
   * @module model/RecycleBinEntry
   * @version v1
   */

  /**
   * Constructs a new <code>RecycleBinEntry</code>.
   * @alias module:model/RecycleBinEntry
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>RecycleBinEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecycleBinEntry} obj Optional instance to populate.
   * @return {module:model/RecycleBinEntry} The populated <code>RecycleBinEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Properties')) {
        obj['Properties'] = ApiClient.convertToType(data['Properties'], {'String': 'String'});
      }
      if (data.hasOwnProperty('PropertyInfos')) {
        obj['PropertyInfos'] = ApiClient.convertToType(data['PropertyInfos'], {'String': {'String': Object}});
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('DeletedBy')) {
        obj['DeletedBy'] = ApiClient.convertToType(data['DeletedBy'], 'String');
      }
      if (data.hasOwnProperty('DeletedDate')) {
        obj['DeletedDate'] = ApiClient.convertToType(data['DeletedDate'], 'Date');
      }
      if (data.hasOwnProperty('RecycleID')) {
        obj['RecycleID'] = ApiClient.convertToType(data['RecycleID'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('ParentId')) {
        obj['ParentId'] = ApiClient.convertToType(data['ParentId'], 'String');
      }
      if (data.hasOwnProperty('ParentType')) {
        obj['ParentType'] = ApiClient.convertToType(data['ParentType'], 'String');
      }
      if (data.hasOwnProperty('ParentName')) {
        obj['ParentName'] = ApiClient.convertToType(data['ParentName'], 'String');
      }
      if (data.hasOwnProperty('Organisation')) {
        obj['Organisation'] = ApiClient.convertToType(data['Organisation'], 'String');
      }
      if (data.hasOwnProperty('@odata.context')) {
        obj['@odata.context'] = ApiClient.convertToType(data['@odata.context'], 'String');
      }
      if (data.hasOwnProperty('@odata.readLink')) {
        obj['@odata.readLink'] = ApiClient.convertToType(data['@odata.readLink'], 'String');
      }
      if (data.hasOwnProperty('Restore@odata.navigationLink')) {
        obj['Restore@odata.navigationLink'] = ApiClient.convertToType(data['Restore@odata.navigationLink'], 'String');
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
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} Properties
   */
  exports.prototype['Properties'] = undefined;
  /**
   * @member {Object.<String, Object.<String, Object>>} PropertyInfos
   */
  exports.prototype['PropertyInfos'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} DeletedBy
   */
  exports.prototype['DeletedBy'] = undefined;
  /**
   * @member {Date} DeletedDate
   */
  exports.prototype['DeletedDate'] = undefined;
  /**
   * @member {String} RecycleID
   */
  exports.prototype['RecycleID'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} ParentId
   */
  exports.prototype['ParentId'] = undefined;
  /**
   * @member {String} ParentType
   */
  exports.prototype['ParentType'] = undefined;
  /**
   * @member {String} ParentName
   */
  exports.prototype['ParentName'] = undefined;
  /**
   * @member {String} Organisation
   */
  exports.prototype['Organisation'] = undefined;
  /**
   * @member {String} @odata.context
   */
  exports.prototype['@odata.context'] = undefined;
  /**
   * @member {String} @odata.readLink
   */
  exports.prototype['@odata.readLink'] = undefined;
  /**
   * @member {String} Restore@odata.navigationLink
   */
  exports.prototype['Restore@odata.navigationLink'] = undefined;
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



  return exports;
}));


