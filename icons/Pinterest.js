"use strict";

exports.__esModule = true;
exports.Pinterest = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pinterest = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Pinterest"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#BD081C",
    fillRule: "evenodd",
    d: "M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.95-.2-2.406.042-3.442.217-.936 1.407-5.965 1.407-5.965s-.36-.718-.36-1.781c0-1.669.968-2.915 2.172-2.915 1.024 0 1.518.769 1.518 1.69 0 1.03-.655 2.57-.993 3.996-.283 1.195.598 2.169 1.777 2.169 2.133 0 3.772-2.25 3.772-5.495 0-2.873-2.065-4.883-5.013-4.883-3.414 0-5.418 2.562-5.418 5.208 0 1.031.397 2.138.893 2.739a.359.359 0 0 1 .083.344c-.091.38-.293 1.194-.333 1.361-.053.219-.174.266-.402.16-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.261 7.93-7.261 4.162 0 7.397 2.966 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.358-.632-2.75-1.378l-.748 2.853c-.27 1.042-1.002 2.348-1.492 3.146A11.99 11.99 0 0 0 12 24c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12"
  }));
});
exports.Pinterest = Pinterest;
Pinterest.displayName = 'Pinterest';