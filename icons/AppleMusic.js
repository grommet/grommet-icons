"use strict";

exports.__esModule = true;
exports.AppleMusic = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var AppleMusic = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var prefix = (0, _utils.generatePrefix)('AppleMusic');
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "AppleMusic"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "url(#" + prefix + "-b)",
    fillRule: "evenodd",
    d: "M21.992 22.816c.768-.592 1.304-1.424 1.536-2.016.464-1.192.472-2.544.472-3.4V6.6c0-.848 0-2.208-.472-3.4-.232-.592-.776-1.432-1.536-2.016a4.99 4.99 0 0 0-1.688-.88C19.528.08 18.584 0 17.4 0H6.6C5.416 0 4.472.08 3.696.304a5.137 5.137 0 0 0-1.688.88C1.24 1.776.704 2.608.472 3.2.008 4.392 0 5.744 0 6.6v10.8c0 .856.008 2.208.472 3.4.232.592.776 1.432 1.536 2.016.44.344.968.664 1.688.88.776.224 1.72.304 2.904.304h10.8c1.184 0 2.136-.072 2.904-.304a5.137 5.137 0 0 0 1.688-.88Zm-5.706-19.05c.062-.013.576-.104.634-.11.385-.033.6.22.6.63v11.289c0 .303-.003.577-.067.881a2.212 2.212 0 0 1-.348.821 2.087 2.087 0 0 1-.655.606 2.605 2.605 0 0 1-.831.303c-.552.11-.93.136-1.284.065a1.791 1.791 0 0 1-.864-.44 1.88 1.88 0 0 1-.604-1.184 1.886 1.886 0 0 1 .51-1.488c.197-.207.445-.37.776-.499.347-.134.729-.215 1.317-.333l.464-.094c.205-.041.379-.093.52-.265.142-.173.144-.384.144-.593V8.084c0-.404-.182-.514-.566-.44-.276.054-6.19 1.247-6.19 1.247-.333.08-.45.19-.45.603v7.722c0 .303-.015.578-.08.882a2.213 2.213 0 0 1-.348.82 2.088 2.088 0 0 1-.654.606 2.613 2.613 0 0 1-.831.307c-.552.112-.93.136-1.284.065a1.792 1.792 0 0 1-.864-.443 1.863 1.863 0 0 1-.59-1.184 1.874 1.874 0 0 1 .496-1.488c.197-.208.445-.371.776-.5.347-.134.729-.214 1.317-.333l.464-.093c.204-.042.379-.094.52-.266.14-.172.157-.374.157-.582V6.104c0-.12.01-.201.016-.241a.724.724 0 0 1 .24-.462.992.992 0 0 1 .443-.2h.003l7.113-1.435Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: prefix + "-b",
    x1: "12",
    x2: "12",
    y1: "23.907",
    y2: ".517",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: "#FA233B"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "1",
    stopColor: "#FB5C74"
  })), /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
exports.AppleMusic = AppleMusic;
AppleMusic.displayName = 'AppleMusic';