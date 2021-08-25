"use strict";

exports.__esModule = true;
exports.Bitcoin = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Bitcoin = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Bitcoin"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F90",
    fillRule: "evenodd",
    d: "M23.64 14.905c-1.602 6.429-8.114 10.342-14.544 8.738C2.669 22.041-1.244 15.528.359 9.1 1.962 2.67 8.473-1.244 14.902.36c6.43 1.603 10.342 8.116 8.739 14.546zm-6.349-4.613c.24-1.597-.977-2.456-2.64-3.028l.54-2.164-1.317-.328-.525 2.106a55.083 55.083 0 0 0-1.055-.248l.53-2.12-1.317-.328-.54 2.162a44.05 44.05 0 0 1-.84-.197l.001-.007-1.816-.453-.35 1.406s.977.224.956.238c.534.133.63.486.614.766l-.615 2.464c.037.01.085.023.137.044l-.139-.035-.86 3.453c-.066.162-.231.405-.604.312.013.02-.957-.239-.957-.239l-.654 1.508 1.713.427c.32.08.632.163.94.242l-.546 2.188 1.316.328.54-2.164c.359.097.707.187 1.049.272l-.538 2.155 1.317.328.544-2.184c2.246.425 3.934.253 4.645-1.778.573-1.635-.029-2.578-1.21-3.193.86-.198 1.508-.764 1.681-1.933zm-3.008 4.219c-.407 1.635-3.16.75-4.053.53l.723-2.9c.893.223 3.755.664 3.33 2.37zm.407-4.243c-.371 1.487-2.663.732-3.406.547l.656-2.63c.743.186 3.137.532 2.75 2.083z"
  }));
});
exports.Bitcoin = Bitcoin;
Bitcoin.displayName = 'Bitcoin';