"use strict";

exports.__esModule = true;
exports.Italic = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Italic = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Italic"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m13 19.56-.13.43H6.3l.16-.43a4.05 4.05 0 0 0 1.3-.17 1.6 1.6 0 0 0 .76-.55 7.22 7.22 0 0 0 .8-2l2.77-9.61a7.07 7.07 0 0 0 .35-1.81.86.86 0 0 0-.15-.52.94.94 0 0 0-.46-.32 4.28 4.28 0 0 0-1.22-.11l.14-.43h6.16l-.13.43a2.6 2.6 0 0 0-1.12.17 1.78 1.78 0 0 0-.81.67 9.08 9.08 0 0 0-.71 1.93l-2.74 9.63a8.76 8.76 0 0 0-.4 1.69.83.83 0 0 0 .15.5.92.92 0 0 0 .47.32 6.35 6.35 0 0 0 1.38.18z"
  }));
});
exports.Italic = Italic;
Italic.displayName = 'Italic';