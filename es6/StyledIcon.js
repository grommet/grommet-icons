var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

var SIZE_MAP = {
  'large': css(['width:', ';height:', ';'], function (props) {
    return props.theme.icon.size.large;
  }, function (props) {
    return props.theme.icon.size.large;
  }),
  'xlarge': css(['width:', ';height:', ';'], function (props) {
    return props.theme.icon.size.xlarge;
  }, function (props) {
    return props.theme.icon.size.xlarge;
  })
};

var StyledIcon = styled.svg.withConfig({
  displayName: 'StyledIcon'
})(['display:inline-block;flex:0 0 auto;', ' ', ''], function (props) {
  return props.size && SIZE_MAP[props.size];
}, function (props) {
  return props.colorIndex !== 'plain' && '\n    fill: ' + props.theme.icon.color + ';\n    stroke: ' + props.theme.icon.color + ';\n\n    g {\n      fill: inherit;\n      stroke: inherit;\n    }\n\n    *:not([stroke]) {\n      &[fill="none"] {\n        stroke-width: 0;\n      }\n    }\n\n    *[stroke*="#"],\n    *[STROKE*="#"] {\n      stroke: inherit;\n      fill: none;\n    }\n\n    *[fill*="#"],\n    *[FILL*="#"] {\n      fill: inherit;\n      stroke: none;\n    }\n  ';
});

export default StyledIcon.extend(_templateObject, function (props) {
  return props.theme.icon && props.theme.icon.extend;
});