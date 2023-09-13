"use strict";

exports.__esModule = true;
exports.Medium = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Medium = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Medium"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M6.783 5a6.783 6.783 0 1 0 0 13.565A6.783 6.783 0 0 0 6.783 5Zm10.695.522c-1.873 0-3.391 2.803-3.391 6.26 0 .65.053 1.274.152 1.862.132.784.346 1.502.622 2.121.138.31.292.594.46.849.335.51.724.904 1.149 1.148.319.183.657.282 1.008.282s.69-.1 1.009-.282c.425-.244.814-.638 1.149-1.148.167-.255.321-.54.46-.849.276-.618.49-1.337.621-2.12.1-.589.153-1.214.153-1.862 0-3.458-1.519-6.261-3.392-6.261Zm5.218.521c-.136 0-.266.09-.388.259-.082.111-.16.257-.234.434a4.007 4.007 0 0 0-.107.288c-.07.206-.134.441-.193.7-.118.52-.214 1.138-.28 1.825a22.61 22.61 0 0 0-.103 2.234 24.502 24.502 0 0 0 .103 2.234c.066.686.162 1.305.28 1.824.059.26.123.495.193.7.034.104.07.2.107.288.074.177.153.323.234.435.122.168.253.258.388.258.72 0 1.304-2.57 1.304-5.74 0-3.169-.584-5.739-1.304-5.739Z"
  }));
});
exports.Medium = Medium;
Medium.displayName = 'Medium';