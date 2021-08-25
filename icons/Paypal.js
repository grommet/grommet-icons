"use strict";

exports.__esModule = true;
exports.Paypal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Paypal = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Paypal"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#003087",
    fillRule: "evenodd",
    d: "M21.495 7.054c-1.07 4.973-4.48 7.604-9.89 7.604H9.643L8.18 24h3.182c.46 0 .85-.334.923-.788l.037-.198.732-4.636.047-.256a.933.933 0 0 1 .922-.788h.581c3.76 0 6.705-1.528 7.565-5.946.345-1.773.179-3.26-.674-4.334M19.317 1.81C18.206.543 16.197 0 13.627 0H6.169c-.526 0-.973.383-1.055.9L2.008 20.598a.64.64 0 0 0 .633.74h4.604l1.157-7.335-.036.23c.082-.518.526-.9 1.051-.9h2.188c4.299 0 7.664-1.747 8.648-6.797.029-.15.076-.438.076-.438.279-1.869-.002-3.137-1.012-4.287"
  }));
});
exports.Paypal = Paypal;
Paypal.displayName = 'Paypal';