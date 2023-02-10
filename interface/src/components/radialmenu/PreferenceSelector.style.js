import { css } from 'styled-components';

export const container = css`
`;

export const center = css`
  background: #2962FF;
  &:not(:empty):hover {
    cursor: pointer;
  }
  > svg {
    position: relative;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
  }
`;