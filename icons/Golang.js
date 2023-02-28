"use strict";

exports.__esModule = true;
exports.Golang = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Golang = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Golang"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#8CC5E7",
    d: "M21.468 3.206c.713 1.474-1.455 1.631-1.344 2.289.204 1.186.065 2.947-.092 4.68-.27 2.937 1.927 9.97-2.65 12.796-.862.538-2.91.834-4.93.88h-.019c-2.02-.046-4.346-.342-5.208-.88-4.568-2.826-2.372-9.859-2.631-12.796-.167-1.733-.306-3.494-.093-4.68.111-.658-2.057-.806-1.343-2.289.611-1.27 2.122-.148 2.501-.547C7.596.65 9.95.111 11.803.065h1.02c1.843.093 4.197.593 6.143 2.594.38.399 1.881-.722 2.502.547zm-10.036 7.7c-.083.038-.222.946.204.992.288.028 1.075.12 1.26 0 .362-.232.325-.788.121-.927-.343-.222-1.492-.11-1.585-.064zm-2.352-6.8c-.955-.111-2.558.778-2.799 2.669-.26 1.964 2.057 3.91 4.281 1.964 1.196-1.047 1.613-4.272-1.482-4.633zm6.45 0c-3.096.361-2.679 3.586-1.483 4.633 2.223 1.946 4.54 0 4.28-1.964-.231-1.89-1.834-2.78-2.798-2.669z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#B8937F",
    d: "M12.313 8.988c.584-.083 1.983.584 1.89 1.372-.111.917-3.605 1.038-3.79-.056-.111-.667.417-1.093 1.9-1.316zm7.885 7.386c-.287-.01-.472-.39-.472-.621 0-.417.055-.908.361-1.121.63-.436 1.13 1.751.111 1.742zm-15.78 0c-1.02.009-.52-2.178.111-1.742.306.213.361.704.361 1.12 0 .233-.185.612-.472.622zm13.844 6.718c.185.269.194.454-.102.593-1.13.519-2.14-.176-1.76-.37.805-.408 1.306-1.048 1.862-.223zm-11.908.093c.556-.825 1.057-.186 1.863.222.38.195-.63.89-1.76.37-.297-.138-.288-.324-.103-.592z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M19.735 3.429c.046-.195.528-.288.797.046.324.398-.473.945-.51.723-.092-.603-.342-.575-.287-.77zm-14.854 0c.056.194-.195.166-.287.769-.037.222-.834-.325-.51-.723.26-.334.741-.241.797-.046zm10.86 4.512a1.056 1.056 0 1 1 0-2.112 1.056 1.056 0 0 1 0 2.112zm-.278-1.177a.334.334 0 1 0 0-.667.334.334 0 0 0 0 .667zm-4.105 2.67c.111-.427.5-.566.816-.575.806-.019 1.112.417 1.14.76.055.583-2.206.722-1.956-.186zM8.875 7.94a1.056 1.056 0 1 1 0-2.112 1.056 1.056 0 0 1 0 2.112zm.278-1.177a.334.334 0 1 0 0-.667.334.334 0 0 0 0 .667z"
  })));
});
exports.Golang = Golang;
Golang.displayName = 'Golang';