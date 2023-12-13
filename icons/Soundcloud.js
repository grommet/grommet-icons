"use strict";

exports.__esModule = true;
exports.Soundcloud = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Soundcloud = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var prefix = (0, _utils.generatePrefix)('Soundcloud');
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Soundcloud"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "url(#" + prefix + "-a)",
    d: "M0 15.922c0 .298.108.523.324.676a.885.885 0 0 0 .692.162c.231-.045.393-.127.486-.246.093-.119.14-.316.14-.592v-3.238a.799.799 0 0 0-.24-.587.798.798 0 0 0-.587-.24.785.785 0 0 0-.575.24.797.797 0 0 0-.24.587v3.238Zm2.569 1.385c0 .216.076.378.229.486.152.108.348.162.586.162.246 0 .445-.054.597-.162.153-.108.23-.27.23-.486v-7.55a.785.785 0 0 0-.24-.575.798.798 0 0 0-.587-.24.785.785 0 0 0-.575.24.785.785 0 0 0-.24.576v7.55Zm2.557.358c0 .215.078.377.235.485.156.108.357.162.603.162.238 0 .433-.054.586-.162.153-.108.229-.27.229-.485v-6.891c0-.23-.08-.428-.24-.592a.776.776 0 0 0-.575-.246.807.807 0 0 0-.592.246.807.807 0 0 0-.246.592v6.89Zm2.569.033c0 .41.275.614.826.614.551 0 .827-.204.827-.614V6.53c0-.625-.19-.979-.57-1.06-.246-.06-.488.01-.726.211-.238.201-.357.484-.357.849v11.168Zm2.613.324V5.872c0-.388.116-.619.346-.693a6.542 6.542 0 0 1 4.668.625A6.556 6.556 0 0 1 17.707 8a6.543 6.543 0 0 1 1.055 3.065c.454-.193.938-.29 1.452-.29 1.042 0 1.934.368 2.675 1.106.74.737 1.111 1.623 1.111 2.657 0 1.043-.37 1.933-1.111 2.67-.741.737-1.629 1.105-2.664 1.105l-9.716-.01a.261.261 0 0 1-.15-.124.33.33 0 0 1-.05-.156Z"
  }), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: prefix + "-a",
    x1: "30064.2",
    x2: "30064.2",
    y1: "507.299",
    y2: "18096.6",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: "#F80"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "1",
    stopColor: "#F30"
  }))));
});
exports.Soundcloud = Soundcloud;
Soundcloud.displayName = 'Soundcloud';