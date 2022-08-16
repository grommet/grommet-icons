"use strict";

exports.__esModule = true;
exports.Sco = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Sco = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Sco"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#3158A0",
    fillRule: "evenodd",
    d: "M16.16 16.105H24c-.247.746-.99 1.367-1.794 1.367H1.273c-.804 0-1.33-.62-1.268-1.367h14.702a3.784 3.784 0 0 1-.2-1.957h.959c0 .187 0 .343.03.497.31-.093.62-.28.897-.497h.619c-.526.56-1.02 1.025-1.268 1.212.114.277.261.528.416.745zm5.583-8.39C20.692 7.28 19.362 7 17.847 7c-1.546 0-3.03.28-4.206.715l.032.062h8.009l.06-.062zm-6.617 4.941c.031-.062.062-.124.093-.218l-10.792.032-.03-.125c2.659-.528 5.967-.839 9.523-.839.557 0 1.144 0 1.67.031.03-.124.062-.217.093-.342H7.026l-.031-.093c2.319-.497 5.225-.808 8.348-.808h.34c-.03-.062-.061-.186-.092-.28H9.715l-.03-.093a29.155 29.155 0 0 1 5.38-.684 1.616 1.616 0 0 0-.34-.31h-2.876l-.062-.094c1.484-.466 3.278-.745 5.226-.745 1.887 0 3.556.31 4.885.745l-.03.063-6.555.03c.092.063.185.156.278.28.37-.031.741-.031 1.113-.031 2.35 0 4.514.28 6.245.653l-.03.186h-6.896c.031.094.031.218.062.311 2.505.032 4.793.31 6.71.683l-.031.187h-6.617c0 .125 0 .249-.031.342 2.412.124 4.638.373 6.494.745l-.031.156h-4.144a.554.554 0 0 1-.155.218h-.494c.03-.062.093-.125.124-.218h-1.948c-.031.093-.031.156-.063.218h-.773zm-.62 1.492c.032-.156.063-.31.125-.467H6.839l-.062-.124c2.32-.466 5.195-.777 8.287-.777 0-.031.031-.093.062-.124h.773c0 .031-.031.093-.031.124.587.031 1.206.031 1.762.093a.958.958 0 0 0 .154-.217h.495c-.03.093-.093.155-.186.249a33.22 33.22 0 0 1 4.36.559l-.03.217h-4.98c-.154.156-.278.31-.432.467h-.618c.217-.125.402-.31.557-.467h-1.423a2.767 2.767 0 0 0-.062.467h-.958z"
  }));
});
exports.Sco = Sco;
Sco.displayName = 'Sco';