"use strict";

exports.__esModule = true;
exports.AidOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AidOption = function AidOption(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "AidOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,9 L12,19 L12,9 Z M17,14 L7,14 L17,14 Z M1,6.99508929 C1,5.8932319 1.88967395,5 2.991155,5 L21.008845,5 C22.1085295,5 23,5.8926228 23,6.99508929 L23,21.0049107 C23,22.1067681 22.1103261,23 21.008845,23 L2.991155,23 C1.89147046,23 1,22.1073772 1,21.0049107 L1,6.99508929 Z M7,5 L7,2.0093689 C7,1.45190985 7.4556644,1 7.99539757,1 L16.0046024,1 C16.5543453,1 17,1.44335318 17,2.0093689 L17,5"
  }));
};

exports.AidOption = AidOption;