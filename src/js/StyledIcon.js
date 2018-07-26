import styled from 'styled-components';

const StyledIcon = styled.svg`
  display: inline-block;
  flex: 0 0 auto;

  ${({ size, theme }) => size && theme && theme.size && theme.size[size] && `
    width: ${theme.size[size]};
    height: ${theme.size[size]};
  `}
  ${({ color, theme }) => color !== 'plain' && `
    fill: ${color
      ? (theme.colors && theme.colors[color]) || color
      : theme.color};
    stroke: ${color
      ? (theme.colors && theme.colors[color]) || color
      : theme.color};

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
  ${({ theme }) => theme && theme.extend}
`;
