"use strict";

exports.__esModule = true;
exports.Instagram = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Instagram = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Instagram"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.318.077c1.218.056 2.06.235 2.838.537a5.36 5.36 0 0 1 1.956 1.274 5.36 5.36 0 0 1 1.274 1.956c.302.779.481 1.62.537 2.838C23.992 8.192 24 8.724 24 12s-.008 3.808-.077 5.318c-.056 1.218-.235 2.06-.537 2.839a5.36 5.36 0 0 1-1.274 1.955 5.359 5.359 0 0 1-1.956 1.274c-.779.302-1.62.481-2.838.537-1.51.069-2.041.077-5.318.077-3.277 0-3.809-.008-5.318-.077-1.218-.056-2.06-.235-2.839-.537a5.359 5.359 0 0 1-1.955-1.274 5.36 5.36 0 0 1-1.274-1.956c-.302-.779-.481-1.62-.537-2.838C.008 15.81 0 15.278 0 12c0-3.277.008-3.81.077-5.318.056-1.218.235-2.06.537-2.838a5.36 5.36 0 0 1 1.274-1.956A5.36 5.36 0 0 1 3.843.614C4.623.312 5.464.133 6.682.077 8.19.008 8.722 0 12 0c3.277 0 3.81.008 5.318.077zM12 2.667c-3.24 0-3.736.007-5.197.074-.927.042-1.483.16-1.994.359a2.73 2.73 0 0 0-1.036.673A2.707 2.707 0 0 0 3.1 4.809c-.198.51-.317 1.067-.359 1.994C2.674 8.264 2.667 8.76 2.667 12s.007 3.736.074 5.197c.042.927.16 1.483.359 1.993.17.436.35.713.673 1.037.324.324.601.504 1.036.673.51.198 1.067.317 1.994.359 1.462.067 1.958.074 5.197.074 3.24 0 3.735-.007 5.197-.074.927-.042 1.483-.16 1.994-.359a2.73 2.73 0 0 0 1.036-.673c.324-.324.504-.601.673-1.036.198-.51.317-1.067.359-1.994.067-1.462.074-1.958.074-5.197s-.007-3.735-.074-5.197c-.042-.927-.16-1.483-.359-1.993a2.709 2.709 0 0 0-.673-1.037A2.708 2.708 0 0 0 19.19 3.1c-.51-.198-1.067-.317-1.994-.359-1.461-.067-1.957-.074-5.197-.074zm0 15.555a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444zm0-2.666a3.556 3.556 0 1 0 0-7.112 3.556 3.556 0 0 0 0 7.112zm6.222-8.445a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667z"
  }));
});
exports.Instagram = Instagram;
Instagram.displayName = 'Instagram';