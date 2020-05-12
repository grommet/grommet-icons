"use strict";

exports.__esModule = true;
exports.OfflineStorage = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OfflineStorage = function OfflineStorage(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "OfflineStorage"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,21 C15.5230211,21 18.5732537,18.9757518 20.0510587,16.0268945 C20.6582603,14.8152657 21,13.4475416 21,12 C21,10.5673224 20.6652426,9.21283165 20.0696798,8.01047964 C18.5989839,5.04136538 15.5378852,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M20,9 L12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 L20,15"
  }));
};

exports.OfflineStorage = OfflineStorage;