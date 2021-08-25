"use strict";

exports.__esModule = true;
exports.Soundcloud = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Soundcloud = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Soundcloud"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F66E10",
    fillRule: "evenodd",
    d: "M20.727 11.677c1.674 0 3.03 1.368 3.03 3.055 0 1.688-1.356 3.057-3.03 3.057l-8.4-.005a.368.368 0 0 1-.327-.361v-9.7c.002-.178.063-.27.292-.359A5.377 5.377 0 0 1 14.23 7c2.794 0 5.084 2.16 5.325 4.914a3.01 3.01 0 0 1 1.172-.237zM10.237 18h-.973A.268.268 0 0 1 9 17.73V7.77c0-.148.119-.27.264-.27h.972c.145 0 .264.122.264.27v9.96c0 .148-.119.27-.264.27zm-9-1.503H.263A.267.267 0 0 1 0 16.228v-2.462c0-.148.119-.269.264-.269h.972c.145 0 .264.121.264.27v2.461c0 .148-.119.27-.264.27zm6 1.503h-.973A.261.261 0 0 1 6 17.743v-6.486c0-.141.119-.257.264-.257h.972c.145 0 .264.116.264.257v6.486a.261.261 0 0 1-.264.257zm-3 0h-.973A.258.258 0 0 1 3 17.75v-5c0-.137.119-.25.264-.25h.972c.145 0 .264.113.264.25v5c0 .137-.119.25-.264.25z"
  }));
});
exports.Soundcloud = Soundcloud;
Soundcloud.displayName = 'Soundcloud';