import styled from 'styled-components';

const StyledIcon = styled.svg`
  display: inline-block;
  flex: 0 0 auto;

  ${props => props.size && props.theme && props.theme.size && props.theme.size[props.size] && `
    width: ${props.theme.size[props.size]};
    height: ${props.theme.size[props.size]};
  `}
  ${props => props.color !== 'plain' && `
    fill: ${(props.theme.colors && props.theme.colors[props.color]) || props.theme.color};
    stroke: ${(props.theme.colors && props.theme.colors[props.color]) || props.theme.color};

    g {
      fill: inherit;
      stroke: inherit;
    }

    *:not([stroke]) {
      &[fill="none"] {
        stroke-width: 0;
      }
    }

    *[stroke*="#"],
    *[STROKE*="#"] {
      stroke: inherit;
      fill: none;
    }

    *[fill-rule],
    *[FILL-RULE],
    *[fill*="#"],
    *[FILL*="#"] {
      fill: inherit;
      stroke: none;
    }
  `}
`;

export default StyledIcon.extend`
  ${props => props.theme && props.theme.extend}
`;
