"use strict";

exports.__esModule = true;
exports.Mysql = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Mysql = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mysql"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#00758F",
    fillRule: "evenodd",
    d: "M5.462 4.04a2.65 2.65 0 0 0-.67.074v.038h.037c.13.267.36.44.521.67l.372.781.038-.037c.23-.162.336-.422.335-.819-.093-.097-.107-.219-.187-.335-.106-.154-.312-.242-.446-.372zm18.017 19.097c.175.129.293.329.521.41v-.038c-.12-.152-.15-.362-.26-.521a73.62 73.62 0 0 1-.484-.484 7.948 7.948 0 0 0-1.713-1.638c-.508-.365-1.649-.859-1.861-1.451l-.038-.038c.361-.04.784-.171 1.117-.26.56-.15 1.06-.112 1.638-.26.261-.076.521-.15.782-.224v-.15c-.292-.3-.5-.696-.819-.967-.834-.71-1.743-1.42-2.68-2.01-.52-.329-1.162-.541-1.713-.82-.185-.093-.51-.142-.632-.297-.29-.37-.447-.837-.67-1.266-.467-.9-.927-1.883-1.34-2.83-.283-.645-.467-1.281-.82-1.86-1.69-2.78-3.51-4.457-6.328-6.106-.6-.35-1.322-.489-2.084-.67l-1.229-.074c-.25-.105-.51-.41-.744-.559C3.188.434.792-.849.102.838c-.437 1.065.652 2.104 1.042 2.643.273.379.623.803.819 1.229.128.28.15.56.26.856.271.73.506 1.522.856 2.196.178.341.373.7.596 1.005.138.187.372.27.409.559-.23.321-.242.82-.371 1.228-.582 1.835-.363 4.115.484 5.473.259.416.87 1.31 1.711.967.736-.3.572-1.228.782-2.047.047-.186.019-.323.112-.447v.037l.67 1.34c.496.799 1.376 1.634 2.122 2.197.386.292.69.797 1.191.968v-.038h-.037c-.098-.15-.25-.213-.372-.335a8.554 8.554 0 0 1-.857-.968c-.678-.92-1.277-1.928-1.823-2.977-.261-.502-.488-1.054-.708-1.564-.085-.197-.084-.494-.26-.596-.241.374-.596.676-.782 1.117-.298.705-.337 1.565-.447 2.457-.065.023-.036.007-.075.037-.518-.125-.7-.659-.893-1.117-.487-1.157-.578-3.022-.149-4.355.111-.345.613-1.431.41-1.75-.098-.318-.417-.501-.596-.744A5.83 5.83 0 0 1 3.6 7.166c-.398-.902-.585-1.916-1.005-2.829-.2-.436-.54-.877-.819-1.265-.308-.43-.654-.746-.893-1.266-.085-.185-.201-.48-.075-.67.04-.128.097-.182.224-.223.216-.167.817.055 1.042.148.597.248 1.095.484 1.6.82.243.16.489.472.782.558h.335c.525.12 1.112.037 1.601.186.865.263 1.64.672 2.345 1.117 2.146 1.355 3.9 3.283 5.1 5.584.193.37.277.724.447 1.117.343.792.775 1.607 1.116 2.382.34.773.673 1.553 1.154 2.196.253.338 1.231.52 1.676.708.311.131.821.269 1.116.446.564.34 1.11.745 1.638 1.117.264.187 1.077.595 1.117.93-1.31-.034-2.31.087-3.164.448-.243.102-.63.105-.67.409.133.14.154.35.26.521.204.33.549.773.856 1.005.337.254.683.525 1.043.745.64.39 1.356.614 1.972 1.005.365.231.726.521 1.08.782z"
  }));
});
exports.Mysql = Mysql;
Mysql.displayName = 'Mysql';