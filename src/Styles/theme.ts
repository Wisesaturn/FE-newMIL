import { pixelToRem, calLineHeight } from '@/Utils/Libs/layoutFunc';

const PC = {
  h1: `
    font-size : ${pixelToRem(32)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(32, 1.2)};
  `,
  h2: `
    font-size : ${pixelToRem(26)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(26, 1.44)};
  `,
  h3: `
    font-size : ${pixelToRem(20)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(20, 1.44)};
  `,
  h4: `
    font-size : ${pixelToRem(16)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(16, 1.6)};
    
  `,
  body: `
    font-size : ${pixelToRem(16)};
    font-weight : 400;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(16, 1.6)};
  `,
  caption: `
    font-size : ${pixelToRem(13)};
    font-weight : 300;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(13, 1.6)};
  `,
};

const Mobile = {
  h1: `
    font-size : ${pixelToRem(26)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(26, 1.2)};
  `,
  h2: `
    font-size : ${pixelToRem(22)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(22, 1.44)};
  `,
  h3: `
    font-size : ${pixelToRem(18)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(18, 1.44)};
  `,
  h4: `
    font-size : ${pixelToRem(14)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(14, 1.6)};
  `,
  body: `
    font-size : ${pixelToRem(14)};
    font-weight : 400;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(14, 1.6)};
  `,
  caption: `
    font-size : ${pixelToRem(12)};
    font-weight : 300;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(12, 1.6)};
  `,
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const color = {
  blue: '#4B89DC',
  lightblue: '#FCFDFF',
  black: '#333333',
  white: '#fefefe',
  bad: '#FF3E55',
  darkBlue: '#0A2B52',
  ajouBlue: '#0066B3',
  ajouGold: '#BB8732',
  ajouSky: '#88B2DF',
  ajouYellow: '#F79433',
  ajouSilver: '#959B9D',
  disabled: '#dedede',
};

const size = {
  mobile: '786px',
  desktop: '787px',
};

const layout: {
  gutter: number;
  column: number;
  maxWidth: string;
  mobile: string;
  desktop: string;
} = {
  maxWidth: '90rem',
  gutter: 24,
  column: 98,
  mobile: `screen and (max-width: ${size.mobile})`,
  desktop: `screen and (min-width: ${size.desktop})`,
};

const theme = {
  common,
  color,
  layout,
  PC,
  Mobile,
};

export default theme;
