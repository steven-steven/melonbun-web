import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  // Storybook-specific color palette
  colorPrimary: '#FF4785', // coral
  colorSecondary: '#1EA7FD', // ocean

  // UI
  appBg: '#2f2f2f', //main surrounding
  appContentBg: '#34495e',  //background  //dark blue: #34495e //blue light #95a5a6
  appBorderColor: 'rgba(255,255,255,.1)', //border of workspace
  appBorderRadius: 4,

  // Fonts
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#333333',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#1EA7FD',
  barBg: '#333333',

  // Form colors (ie. search bar)
  inputBg: '#3f3f3f',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,
  
});




// export const color = {
//   // Official color palette
//   primary: '#FF4785', // coral
//   secondary: '#1EA7FD', // ocean
//   tertiary: '#FAFBFC',
//   ancillary: '#22a699', // for code

//   // Complimentary
//   orange: '#FC521F',
//   gold: '#FFAE00',
//   green: '#66BF3C',
//   seafoam: '#37D5D3',
//   purple: '#6F2CAC',
//   ultraviolet: '#2A0481',

//   // Monochrome
//   lightest: '#FFFFFF',
//   lighter: '#F8F8F8',
//   light: '#F3F3F3',
//   mediumlight: '#EEEEEE',
//   medium: '#DDDDDD',
//   mediumdark: '#999999',
//   dark: '#666666',
//   darker: '#444444',
//   darkest: '#333333',

//   // For borders
//   border: 'rgba(0,0,0,.1)',

//   // Status
//   positive: '#66BF3C',
//   negative: '#FF4400',
//   warning: '#E69D00',

//   defaultText: '#333333',
//   inverseText: '#FFFFFF',
// };

// export const background = {
//   app: '#F6F9FC',
//   content: color.lightest,
//   hoverable: 'rgba(0,0,0,.05)', // hover state for items in a list

//   // Notification, error, and warning backgrounds
//   positive: '#E1FFD4',
//   negative: '#FEDED2',
//   warning: '#FFF5CF',
// };

// export const typography = {
//   fonts: {
//     base: [
//       '"Nunito Sans"',
//       '-apple-system',
//       '".SFNSText-Regular"',
//       '"San Francisco"',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       '"Helvetica Neue"',
//       'Helvetica',
//       'Arial',
//       'sans-serif',
//     ].join(', '),
//     mono: [
//       '"Operator Mono"',
//       '"Fira Code Retina"',
//       '"Fira Code"',
//       '"FiraCode-Retina"',
//       '"Andale Mono"',
//       '"Lucida Console"',
//       'Consolas',
//       'Monaco',
//       'monospace',
//     ].join(', '),
//   },
//   weight: {
//     regular: 400,
//     bold: 700,
//     black: 900,
//   },
//   size: {
//     s1: 12,
//     s2: 14,
//     s3: 16,
//     m1: 20,
//     m2: 24,
//     m3: 28,
//     l1: 32,
//     l2: 40,
//     l3: 48,
//     code: 90,
//   },
// };
