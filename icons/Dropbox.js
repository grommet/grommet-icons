"use strict";

exports.__esModule = true;
exports.Dropbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Dropbox = function Dropbox(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dropbox"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#007EE5",
    fillRule: "evenodd",
    d: "M7.0599,1 L0.00015,5.6095 L4.8819,9.5185 L12.00015,5.1235 L7.0599,1 Z M0,13.4281 L7.05975,18.0376 L12,13.9141 L4.88175,9.5191 L0,13.4281 Z M11.99985,13.914175 L16.9401,18.037675 L23.99985,13.428175 L19.1181,9.518425 L11.99985,13.914175 Z M24,5.609575 L16.94025,1.000075 L12,5.123575 L19.11825,9.518575 L24,5.609575 Z M12.014475,14.801275 L7.059975,18.912775 L4.939725,17.528275 L4.939725,19.080025 L12.014475,23.322775 L19.089225,19.080025 L19.089225,17.528275 L16.968975,18.912775 L12.014475,14.801275 Z"
  }));
};

exports.Dropbox = Dropbox;