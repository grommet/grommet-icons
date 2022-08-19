"use strict";

exports.__esModule = true;
exports.LikeFill = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LikeFill = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Like"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    fill: "none",
    fillRule: "evenodd",
    d: "M11 0h-.997L10 .997 11 1l-1-.003v.261l-.002.698-.006 2.207a2728.4 2728.4 0 0 0-.008 4.163c0 .42-.155.83-.454 1.132C9.243 9.749 8.763 10 8 10H1.001L1 11v-1H0v14h1v-1 1h19c1.154 0 2.203-.29 2.957-1.043C23.711 22.203 24 21.154 24 20v-9.999L23 10h1V9h-7V4c0-1.154-.29-2.203-1.043-2.957C15.203.289 14.154 0 13 0h-2ZM5 12v10H2V12h3Z",
    clipRule: "evenodd"
  }));
});
exports.LikeFill = LikeFill;
LikeFill.displayName = 'LikeFill';