import styled, { css } from 'styled-components';

const SIZE_MAP = {
  'large': css`
    width: ${props => props.theme.icon.size.large};
    height: ${props => props.theme.icon.size.large};
  `,
  'xlarge': css`
    width: ${props => props.theme.icon.size.xlarge};
    height: ${props => props.theme.icon.size.xlarge};
  `,
};

const StyledIcon = styled.svg`
  display: inline-block;
  flex: 0 0 auto;

  ${props => props.size && SIZE_MAP[props.size]}
  ${props => props.color !== 'plain' && `
    fill: ${props.theme.icon.color};
    stroke: ${props.theme.icon.color};

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
  ${props => props.theme.icon && props.theme.icon.extend}
`;
