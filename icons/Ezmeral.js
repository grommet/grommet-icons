"use strict";

exports.__esModule = true;
exports.Ezmeral = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Ezmeral = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 48 24",
    a11yTitle: "Ezmeral"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 8h34v8H7V8z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 8h6v8H1V8zm40 0h6v8h-6V8zM7 16h34v6H7v-6z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 2h34v6H7V2z",
    fill: "#00C781"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m1 8 6-6v6H1zm0 8 6 6v-6H1zm46-8-6-6v6h6zm0 8-6 6v-6h6z",
    fill: "#01A982"
  }));
});
exports.Ezmeral = Ezmeral;
Ezmeral.displayName = 'Ezmeral';