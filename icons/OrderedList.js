"use strict";

exports.__esModule = true;
exports.OrderedList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OrderedList = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "OrderedList"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.77 6.42h18.06v1.75H5.77zm0 5.29h18.06v1.75H5.77zm0 5.28h18.06v1.75H5.77zM3.13 4.87V8a2 2 0 0 0 0 .45.3.3 0 0 0 .13.16.62.62 0 0 0 .32.06h.12v.11h-2v-.07h.1a.79.79 0 0 0 .35-.06.29.29 0 0 0 .14-.16A1.75 1.75 0 0 0 2.3 8V6a1.28 1.28 0 0 0 0-.33.24.24 0 0 0-.1-.11.28.28 0 0 0-.16 0 .91.91 0 0 0-.35.09l-.05-.1L3 4.87zm.52 9.43H1.37v-.06a12.51 12.51 0 0 0 1.27-1.67 1.81 1.81 0 0 0 .22-.84.7.7 0 0 0-.18-.5.6.6 0 0 0-.45-.2.75.75 0 0 0-.68.44h-.11a1.58 1.58 0 0 1 .47-.81 1.09 1.09 0 0 1 .72-.26 1.06 1.06 0 0 1 .54.14 1 1 0 0 1 .38.37.9.9 0 0 1 .14.45 1.6 1.6 0 0 1-.21.77 7.28 7.28 0 0 1-1.25 1.47h.83a1.87 1.87 0 0 0 .4 0 .33.33 0 0 0 .15-.09 1.16 1.16 0 0 0 .16-.26h.1zM2.09 18v-.1a1.88 1.88 0 0 0 .45-.17.67.67 0 0 0 .22-.25.69.69 0 0 0 .09-.34.55.55 0 0 0-.17-.41.58.58 0 0 0-.43-.17.8.8 0 0 0-.68.42h-.11a1.72 1.72 0 0 1 .54-.79 1.16 1.16 0 0 1 .71-.24.93.93 0 0 1 .66.24.76.76 0 0 1 .26.57.78.78 0 0 1-.12.41 1 1 0 0 1-.38.35 1.34 1.34 0 0 1 .51.4 1 1 0 0 1 .17.6 1.38 1.38 0 0 1-.44 1A1.62 1.62 0 0 1 2.2 20a1.24 1.24 0 0 1-.71-.16.34.34 0 0 1-.16-.29.32.32 0 0 1 .31-.32.41.41 0 0 1 .18 0l.32.25a.84.84 0 0 0 .52.23.47.47 0 0 0 .34-.16.61.61 0 0 0 .15-.42 1.1 1.1 0 0 0-.27-.72 1.42 1.42 0 0 0-.79-.41z"
  }));
});
exports.OrderedList = OrderedList;
OrderedList.displayName = 'OrderedList';