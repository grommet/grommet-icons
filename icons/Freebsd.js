"use strict";

exports.__esModule = true;
exports.Freebsd = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Freebsd = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Freebsd"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#9B2718",
    fillRule: "evenodd",
    d: "M23.725.403c1.273 1.272-2.254 6.862-2.85 7.458-.597.596-2.111.048-3.383-1.224-1.272-1.272-1.82-2.787-1.224-3.383.596-.596 6.185-4.123 7.457-2.85zM5.885 1.75C3.943.647 1.179-.58.3.3c-.891.89.38 3.717 1.493 5.662A11.945 11.945 0 0 1 5.885 1.75zm15.9 5.674c.179.606.147 1.108-.143 1.397-.678.678-2.508-.044-4.158-1.614a8.227 8.227 0 0 1-.341-.323c-.596-.597-1.06-1.232-1.357-1.817-.578-1.036-.723-1.952-.286-2.388.238-.238.619-.303 1.083-.22.303-.19.66-.404 1.053-.623a11.491 11.491 0 0 0-5.33-1.301C5.928.534.757 5.704.757 12.082S5.927 23.63 12.306 23.63c6.378 0 11.548-5.17 11.548-11.548 0-2.06-.54-3.991-1.485-5.666-.204.373-.403.714-.584 1.007z"
  }));
});
exports.Freebsd = Freebsd;
Freebsd.displayName = 'Freebsd';