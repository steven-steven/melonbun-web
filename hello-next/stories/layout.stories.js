import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {muiTheme} from 'storybook-addon-material-ui';
import { Button, Welcome } from '@storybook/react/demo';
import SDrawerPanel, {DrawerPanel} from '../components/App/Layout/Drawer/index';
import SNavBar, {NavBar} from '../components/App/Layout/NavBar/index.tsx'
import {theme} from '../helper/getPageContext';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
addDecorator(muiTheme([theme]))

storiesOf('Layout/NavBar', module)
    .addParameters({
        info: {
            text: 'NavBar and Drawer component that wraps every page',
            propTables: [NavBar, DrawerPanel],
            propTablesExclude: [SNavBar, SDrawerPanel], // do not display propTable for HOC
        },
    })
    .add('NavBar_Close', () => (
        <SNavBar
            handleDrawerToggle = {linkTo('Layout/NavBar', 'NavBar_Open')}
            isDrawerOpen = {false}
            isLoggedIn = {false}
        />
    ))
    .add('NavBar_Open', () => (
        <div>
            <SNavBar
                handleDrawerToggle = {()=>{}}
                isDrawerOpen = {true}
                isLoggedIn = {false}
            />
            <SDrawerPanel
                show = {true}
                handleDrawerToggle = {linkTo('Layout/NavBar', 'NavBar_Close')}
            />
        </div>
    ));
