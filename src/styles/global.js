/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from './colors';
import { font } from './font';

export const reset = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;


export const global = css`
  body {
    font-family: ${font.primary};
    color: ${colors.black};
    background-color: ${colors.gray.light};
    font-size: 1rem;
  }
`;
