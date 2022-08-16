"use strict";

exports.__esModule = true;
exports.Ebay = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Ebay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 60 24",
    a11yTitle: "Ebay"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#E53238",
    d: "M7.773 5.218C3.544 5.218.02 6.998.02 12.366c0 4.253 2.37 6.931 7.862 6.931 6.466 0 6.88-4.224 6.88-4.224H11.63s-.671 2.275-3.938 2.275c-2.66 0-4.573-1.783-4.573-4.28H15.09V11.5c0-2.472-1.582-6.282-7.317-6.282zm-.109 2.004c2.533 0 4.259 1.538 4.259 3.844H3.187c0-2.448 2.253-3.844 4.477-3.844z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#0064D2",
    d: "M15.088.02V16.6c0 .941-.068 2.263-.068 2.263h2.988s.107-.95.107-1.817c0 0 1.476 2.29 5.49 2.29 4.227 0 7.098-2.91 7.098-7.08 0-3.878-2.637-6.998-7.09-6.998-4.172 0-5.468 2.233-5.468 2.233V.02h-3.057zm7.753 7.29c2.87 0 4.695 2.112 4.695 4.948 0 3.04-2.108 5.029-4.675 5.029-3.063 0-4.716-2.373-4.716-5.002 0-2.45 1.483-4.975 4.696-4.975z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F5AF02",
    d: "M38.129 5.218c-6.362 0-6.77 3.455-6.77 4.007h3.166s.166-2.017 3.386-2.017c2.091 0 3.712.95 3.712 2.775v.65h-3.712c-4.93 0-7.535 1.43-7.535 4.332 0 2.856 2.407 4.41 5.661 4.41 4.434 0 5.863-2.43 5.863-2.43 0 .966.075 1.919.075 1.919h2.815s-.109-1.18-.109-1.936V10.4c0-4.281-3.481-5.182-6.552-5.182zm3.494 7.365v.866c0 1.13-.703 3.94-4.842 3.94-2.267 0-3.238-1.123-3.238-2.424 0-2.367 3.272-2.382 8.08-2.382z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#86B817",
    d: "M42.976 5.76h3.562l5.113 10.159L56.753 5.76h3.227l-9.292 18.086h-3.385l2.681-5.042z"
  })));
});
exports.Ebay = Ebay;
Ebay.displayName = 'Ebay';