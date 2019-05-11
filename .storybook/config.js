import { configure, addParameters, addDecorator } from '@storybook/react';
import './mockNextRouter';
import storybookTheme from './storybookTheme';
import {muiTheme} from 'storybook-addon-material-ui';
import {theme} from '../helper/getPageContext';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withInfo);
addDecorator(muiTheme([theme]));
addDecorator(withKnobs);

addParameters({
  options: {
    panelPosition: 'right',
    name: 'MelonBun',
    theme: storybookTheme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
