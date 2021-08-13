var _excluded = ["a11yTitle", "color", "size", "theme"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { colorStyle } from 'grommet-styles';
import { defaultProps } from './default-props';
var colorCss = css(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill=\"none\"]{stroke-width:0;}}*[stroke*=\"#\"],*[STROKE*=\"#\"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*=\"#\"],*[FILL*=\"#\"]{fill:inherit;stroke:none;}"], function (props) {
  return colorStyle('fill', props.color || props.theme.global.colors.icon, props.theme);
}, function (props) {
  return colorStyle('stroke', props.color || props.theme.global.colors.icon, props.theme);
});
var IconInner = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      color = _ref.color,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    "aria-label": a11yTitle
  }, rest));
});
IconInner.displayName = 'Icon';

var parseMetricToNum = function parseMetricToNum(string) {
  return parseFloat(string.match(/\d+(\.\d+)?/), 10);
};

var StyledIcon = styled(IconInner).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", ""], function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size,
      theme = _ref2.theme,
      viewBox = _ref2.viewBox;

  var _split = (viewBox || '0 0 24 24').split(' '),
      w = _split[2],
      h = _split[3];

  var scale = w / h;
  var dimension = parseMetricToNum(theme.icon.size[size] || size);

  if (w < h) {
    return "\n      width: " + dimension + "px;\n      height: " + dimension / scale + "px;\n    ";
  }

  if (h < w) {
    return "\n      width: " + dimension * scale + "px;\n      height: " + dimension + "px;\n    ";
  }

  return "\n      width: " + dimension + "px;\n      height: " + dimension + "px;\n    ";
}, function (_ref3) {
  var color = _ref3.color;
  return color !== 'plain' && colorCss;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme && theme.icon.extend;
});
StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, defaultProps);
export { StyledIcon };