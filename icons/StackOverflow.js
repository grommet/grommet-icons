"use strict";

exports.__esModule = true;
exports.StackOverflow = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StackOverflow = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StackOverflow"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FE7A15",
    fillRule: "evenodd",
    d: "M11.414.132a1.406 1.406 0 0 1 1.188 0l10.82 5.055a.421.421 0 0 1-.002.764l-10.905 5.017a1.215 1.215 0 0 1-1.016 0L.595 5.951a.42.42 0 0 1-.002-.764L11.413.132zm12.009 11.526a.42.42 0 0 1-.003.764l-10.904 5.017a1.215 1.215 0 0 1-1.016 0L.595 12.422a.42.42 0 0 1-.002-.764l2.235-1.044a1.216 1.216 0 0 1 1.023-.003l7.649 3.52c.322.148.694.148 1.016 0l7.649-3.52a1.22 1.22 0 0 1 1.023.003l2.235 1.044zm0 6.5a.42.42 0 0 1-.003.764l-10.904 5.017a1.215 1.215 0 0 1-1.016 0L.595 18.922a.42.42 0 0 1-.002-.764l2.235-1.044a1.216 1.216 0 0 1 1.023-.003l7.649 3.52c.322.148.694.148 1.016 0l7.649-3.52a1.22 1.22 0 0 1 1.023.003l2.235 1.044z"
  }));
});
exports.StackOverflow = StackOverflow;
StackOverflow.displayName = 'StackOverflow';