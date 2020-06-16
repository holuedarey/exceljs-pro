"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseXform = require('../base-xform');

var PageSetupPropertiesXform = /*#__PURE__*/function (_BaseXform) {
  _inherits(PageSetupPropertiesXform, _BaseXform);

  function PageSetupPropertiesXform() {
    _classCallCheck(this, PageSetupPropertiesXform);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageSetupPropertiesXform).apply(this, arguments));
  }

  _createClass(PageSetupPropertiesXform, [{
    key: "render",
    value: function render(xmlStream, model) {
      if (model && model.fitToPage) {
        xmlStream.leafNode(this.tag, {
          fitToPage: model.fitToPage ? '1' : undefined
        });
        return true;
      }

      return false;
    }
  }, {
    key: "parseOpen",
    value: function parseOpen(node) {
      if (node.name === this.tag) {
        this.model = {
          fitToPage: node.attributes.fitToPage === '1'
        };
        return true;
      }

      return false;
    }
  }, {
    key: "parseText",
    value: function parseText() {}
  }, {
    key: "parseClose",
    value: function parseClose() {
      return false;
    }
  }, {
    key: "tag",
    get: function get() {
      return 'pageSetUpPr';
    }
  }]);

  return PageSetupPropertiesXform;
}(BaseXform);

module.exports = PageSetupPropertiesXform;
//# sourceMappingURL=page-setup-properties-xform.js.map
