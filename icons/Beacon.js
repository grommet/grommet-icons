"use strict";

exports.__esModule = true;
exports.Beacon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Beacon = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Beacon"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.515.515A11.966 11.966 0 0 0 0 9c0 3.313 1.344 6.315 3.515 8.485l1.414-1.414A9.966 9.966 0 0 1 2 9a9.966 9.966 0 0 1 2.929-7.071L3.515.515zm2.828 2.828A7.978 7.978 0 0 0 4 9c0 2.209.897 4.21 2.343 5.657l1.414-1.414A5.978 5.978 0 0 1 6 9c0-1.657.67-3.156 1.757-4.243L6.343 3.343zM12 5a4 4 0 0 0-1 7.874V23h2V12.874A4.002 4.002 0 0 0 12 5zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7.657-5.657A7.978 7.978 0 0 1 20 9c0 2.209-.897 4.21-2.343 5.657l-1.414-1.414A5.978 5.978 0 0 0 18 9c0-1.657-.67-3.156-1.757-4.243l1.414-1.414zM20.485.515A11.965 11.965 0 0 1 24 9c0 3.313-1.344 6.315-3.515 8.485l-1.414-1.414A9.966 9.966 0 0 0 22 9a9.966 9.966 0 0 0-2.929-7.071L20.485.515z",
    fill: "#000"
  }));
});
exports.Beacon = Beacon;
Beacon.displayName = 'Beacon';