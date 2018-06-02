var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var StyledIcon = styled.svg.withConfig({
  displayName: 'StyledIcon'
})(['display:inline-block;flex:0 0 auto;', ' ', ''], function (props) {
  return props.size && props.theme && props.theme.size && props.theme.size[props.size] && '\n    width: ' + props.theme.size[props.size] + ';\n    height: ' + props.theme.size[props.size] + ';\n  ';
}, function (props) {
  return props.color !== 'plain' && '\n    fill: ' + (props.theme.colors && props.theme.colors[props.color] || props.theme.color) + ';\n    stroke: ' + (props.theme.colors && props.theme.colors[props.color] || props.theme.color) + ';\n\n    g {\n      fill: inherit;\n      stroke: inherit;\n    }\n\n    *:not([stroke]) {\n      &[fill="none"] {\n        stroke-width: 0;\n      }\n    }\n\n    *[stroke*="#"],\n    *[STROKE*="#"] {\n      stroke: inherit;\n      fill: none;\n    }\n\n    *[fill-rule],\n    *[FILL-RULE],\n    *[fill*="#"],\n    *[FILL*="#"] {\n      fill: inherit;\n      stroke: none;\n    }\n  ';
});

export default StyledIcon.extend(_templateObject, function (props) {
  return props.theme && props.theme.extend;
});