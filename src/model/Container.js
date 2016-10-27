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
    root.SynactaClientJs.Container = factory(root.SynactaClientJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Container model module.
   * @module model/Container
   * @version v1
   */

  /**
   * Constructs a new <code>Container</code>.
   * @alias module:model/Container
   * @class
   */
  var exports = function() {
    var _this = this;

























  };

  /**
   * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Container} obj Optional instance to populate.
   * @return {module:model/Container} The populated <code>Container</code> instance.
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
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ObjectType')) {
        obj['ObjectType'] = ApiClient.convertToType(data['ObjectType'], 'String');
      }
      if (data.hasOwnProperty('ParentID')) {
        obj['ParentID'] = ApiClient.convertToType(data['ParentID'], 'String');
      }
      if (data.hasOwnProperty('ParentType')) {
        obj['ParentType'] = ApiClient.convertToType(data['ParentType'], 'String');
      }
      if (data.hasOwnProperty('IsVirtual')) {
        obj['IsVirtual'] = ApiClient.convertToType(data['IsVirtual'], 'Boolean');
      }
      if (data.hasOwnProperty('Frozen')) {
        obj['Frozen'] = ApiClient.convertToType(data['Frozen'], 'Boolean');
      }
      if (data.hasOwnProperty('HasChild')) {
        obj['HasChild'] = ApiClient.convertToType(data['HasChild'], 'Boolean');
      }
      if (data.hasOwnProperty('CheckedOutBy')) {
        obj['CheckedOutBy'] = ApiClient.convertToType(data['CheckedOutBy'], 'String');
      }
      if (data.hasOwnProperty('Version')) {
        obj['Version'] = ApiClient.convertToType(data['Version'], 'String');
      }
      if (data.hasOwnProperty('Hash')) {
        obj['Hash'] = ApiClient.convertToType(data['Hash'], 'String');
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
      if (data.hasOwnProperty('Document@odata.navigationLink')) {
        obj['Document@odata.navigationLink'] = ApiClient.convertToType(data['Document@odata.navigationLink'], 'String');
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
      if (data.hasOwnProperty('@odata.PicklistLink')) {
        obj['@odata.PicklistLink'] = ApiClient.convertToType(data['@odata.PicklistLink'], 'String');
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
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} ObjectType
   */
  exports.prototype['ObjectType'] = undefined;
  /**
   * @member {String} ParentID
   */
  exports.prototype['ParentID'] = undefined;
  /**
   * @member {String} ParentType
   */
  exports.prototype['ParentType'] = undefined;
  /**
   * @member {Boolean} IsVirtual
   */
  exports.prototype['IsVirtual'] = undefined;
  /**
   * @member {Boolean} Frozen
   */
  exports.prototype['Frozen'] = undefined;
  /**
   * @member {Boolean} HasChild
   */
  exports.prototype['HasChild'] = undefined;
  /**
   * @member {String} CheckedOutBy
   */
  exports.prototype['CheckedOutBy'] = undefined;
  /**
   * @member {String} Version
   */
  exports.prototype['Version'] = undefined;
  /**
   * @member {String} Hash
   */
  exports.prototype['Hash'] = undefined;
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
   * @member {String} Document@odata.navigationLink
   */
  exports.prototype['Document@odata.navigationLink'] = undefined;
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
  /**
   * @member {String} @odata.PicklistLink
   */
  exports.prototype['@odata.PicklistLink'] = undefined;



  return exports;
}));


