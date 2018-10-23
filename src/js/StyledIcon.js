import styled from 'styled-components';

export const StyledIcon = styled.svg`
  display: inline-block;
  flex: 0 0 auto;

  ${({ size, theme }) => size && `
    width: ${theme.size[size] || size};
    height: ${theme.size[size] || size};
  `}
  ${({ colorProp, theme }) => colorProp !== 'plain' && `
    fill: ${colorProp
      ? (theme.colors && theme.colors[colorProp]) || colorProp
      : theme.color};
    stroke: ${colorProp
      ? (theme.colors && theme.colors[colorProp]) || colorProp
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
  ${({ theme }) => theme && theme.extend}
`;
