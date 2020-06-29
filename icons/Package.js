"use strict";

exports.__esModule = true;
exports.Package = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Package = function Package(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Package"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.3714 0.571408L12 0.422852L11.6286 0.571408L1.62861 4.57141L1 4.82285V5.49988V18.4999V19.1769L1.62861 19.4284L11.6286 23.4284L12 23.5769L12.3714 23.4284L22.3714 19.4284L23 19.1769V18.4999V5.49988V4.82285L22.3714 4.57141L12.3714 0.571408ZM3 6.97692V17.8229L11 21.0229V10.1769L3 6.97692ZM13 10.1769V21.0229L21 17.8229V6.97692L13 10.1769ZM19.3074 5.49988L12 2.57692L9.94258 3.39988L17.25 6.32285L19.3074 5.49988ZM4.69258 5.49988L7.25 4.47692L14.5574 7.39988L12 8.42285L4.69258 5.49988Z",
    fill: "#000"
  }));
};

exports.Package = Package;