"use strict";

exports.__esModule = true;
exports.DislikeFill = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DislikeFill = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dislike"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    fill: "none",
    fillRule: "evenodd",
    d: "M13 24h.997l.003-.997L13 23l1 .003v-.261l.002-.698.006-2.207c.004-1.665.008-3.498.008-4.163 0-.42.155-.83.454-1.132.287-.291.767-.542 1.53-.542h6.999L23 13v1h1V0h-1v1-1H4C2.846 0 1.797.29 1.043 1.043.289 1.797 0 2.846 0 4v9.999L1 14H0v1h7v5c0 1.154.29 2.203 1.043 2.957C8.797 23.711 9.846 24 11 24h2Zm6-12V2h3v10h-3Z",
    clipRule: "evenodd"
  }));
});
exports.DislikeFill = DislikeFill;
DislikeFill.displayName = 'DislikeFill';