"use strict";

exports.__esModule = true;
exports.Youtube = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Youtube = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Youtube"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#CD201F",
    fillRule: "evenodd",
    d: "M9.522 15.553V8.81l6.484 3.383-6.484 3.36zM23.76 7.641s-.235-1.654-.954-2.382c-.913-.956-1.936-.96-2.405-1.016C17.043 4 12.005 4 12.005 4h-.01s-5.038 0-8.396.243c-.47.055-1.492.06-2.406 1.016C.474 5.987.24 7.641.24 7.641S0 9.584 0 11.525v1.822c0 1.942.24 3.884.24 3.884s.234 1.653.953 2.382c.914.956 2.113.926 2.647 1.026 1.92.184 8.16.241 8.16.241s5.043-.007 8.401-.25c.47-.056 1.492-.061 2.405-1.017.72-.729.954-2.382.954-2.382s.24-1.942.24-3.885v-1.82c0-1.942-.24-3.885-.24-3.885z"
  }));
});
exports.Youtube = Youtube;
Youtube.displayName = 'Youtube';