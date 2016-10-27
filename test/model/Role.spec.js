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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SynactaClientJs);
  }
}(this, function(expect, SynactaClientJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SynactaClientJs.Role();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Role', function() {
    it('should create an instance of Role', function() {
      // uncomment below and update the code to test Role
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be.a(SynactaClientJs.Role);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property rights (base name: "rights")', function() {
      // uncomment below and update the code to test the property rights
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property odataContext (base name: "@odata.context")', function() {
      // uncomment below and update the code to test the property odataContext
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property odataReadLink (base name: "@odata.readLink")', function() {
      // uncomment below and update the code to test the property odataReadLink
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property fullODataLinkodataNavigationLink (base name: "FullODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property fullODataLinkodataNavigationLink
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property standardODataLinkodataNavigationLink (base name: "StandardODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property standardODataLinkodataNavigationLink
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

    it('should have the property noneODataLinkodataNavigationLink (base name: "NoneODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property noneODataLinkodataNavigationLink
      //var instane = new SynactaClientJs.Role();
      //expect(instance).to.be();
    });

  });

}));
