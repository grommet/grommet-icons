"use strict";

exports.__esModule = true;
exports.Skype = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Skype = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Skype"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#00AFF0",
    fillRule: "evenodd",
    d: "M12.052 18.856c-4.027 0-5.828-1.98-5.828-3.463 0-.761.562-1.295 1.336-1.295 1.724 0 1.277 2.475 4.492 2.475 1.645 0 2.554-.894 2.554-1.809 0-.55-.271-1.159-1.355-1.426l-3.581-.894c-2.884-.723-3.407-2.282-3.407-3.748 0-3.043 2.864-4.185 5.556-4.185 2.477 0 5.4 1.369 5.4 3.194 0 .783-.678 1.238-1.452 1.238-1.47 0-1.2-2.035-4.162-2.035-1.47 0-2.283.665-2.283 1.618 0 .95 1.16 1.254 2.168 1.483l2.651.59c2.903.646 3.64 2.34 3.64 3.938 0 2.472-1.898 4.319-5.73 4.319m11.1-4.887-.022.127-.04-.241c.021.037.04.076.061.114.124-.674.19-1.364.19-2.054a11.297 11.297 0 0 0-3.32-8.014A11.287 11.287 0 0 0 12.006.583c-.722 0-1.444.067-2.147.202l-.005.001c.04.021.08.04.118.061L9.736.81l.12-.024A6.722 6.722 0 0 0 6.709 0a6.663 6.663 0 0 0-4.744 1.965A6.666 6.666 0 0 0 0 6.71c0 1.14.293 2.26.844 3.252.007-.041.012-.083.02-.123l.041.237C.883 10.04.865 10 .844 9.962a11.402 11.402 0 0 0-.171 1.953c0 1.53.3 3.015.891 4.412a11.285 11.285 0 0 0 2.428 3.602 11.268 11.268 0 0 0 3.603 2.428c1.397.592 2.882.892 4.412.892.665 0 1.332-.061 1.984-.177-.038-.02-.077-.04-.115-.063l.242.043c-.042.008-.084.013-.127.02 1.004.569 2.14.87 3.3.87a6.66 6.66 0 0 0 4.744-1.965A6.66 6.66 0 0 0 24 17.233a6.707 6.707 0 0 0-.85-3.264"
  }));
});
exports.Skype = Skype;
Skype.displayName = 'Skype';