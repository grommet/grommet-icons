import styled, { css } from 'styled-components';

const SIZE_MAP = {
  'large': css`
    width: ${props => props.theme.size.large};
    height: ${props => props.theme.size.large};
  `,
  'xlarge': css`
    width: ${props => props.theme.size.xlarge};
    height: ${props => props.theme.size.xlarge};
  `,
};

const StyledIcon = styled.svg`
  display: inline-block;
  flex: 0 0 auto;

  ${props => props.size && SIZE_MAP[props.size]}
  ${props => props.color !== 'plain' && `
    fill: ${props.theme.color};
    stroke: ${props.theme.color};

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
