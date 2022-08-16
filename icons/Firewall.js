"use strict";

exports.__esModule = true;
exports.Firewall = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Firewall = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Firewall"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.006 2.02a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm5.916 2.976a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1h-5.8zm-8.822 0a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1H3.1zm0 9.992a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1H3.1zm7.723 1.1a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1v-1.8zm-5.975-5.015a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1v-1.8zm9.866-1.061a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1h-5.8zM14 3.019a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm1 16.962a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-6zm-9.988 1a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1zM3 9.973a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zm16.63-3.977a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2zm1.015 8.992a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zM2 20.981a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM3.011 2.019a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    fill: "#000"
  }));
});
exports.Firewall = Firewall;
Firewall.displayName = 'Firewall';