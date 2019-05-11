import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { boolean } from '@storybook/addon-knobs';

import SDrawerPanel, {DrawerPanel} from '../components/App/Layout/Drawer';
import SNavBar, {NavBar} from '../components/App/Layout/NavBar/index.tsx'
import {SLayout, Layout} from '../components/App/Layout';
import PopupMenu from '../components/App/Layout/NavBar/PopupMenu';

storiesOf('Layout', module)
    .add('Layout', () => (
            <SLayout>
                Some Content
            </SLayout>
        ),
        { info: {
            text: 'Layout wrapper for all pages',
            propTables: [Layout],
            propTablesExclude: [SLayout], // do not display propTable for HOC
        }}
    );

storiesOf('Layout/NavBar', module)
    .addParameters({
        info: {
            text: 'Main navigation bar component',
            propTables: [NavBar],
            propTablesExclude: [SNavBar], // do not display propTable for HOC
        },
    })
    .add('NavBar', () => (
        <SNavBar
            handleDrawerToggle = {linkTo('Layout/NavBar', 'NavBar_Open')}
            isDrawerOpen = {boolean('isDrawerOpen', false)}
            isLoggedIn = {boolean('isLoggedIn', false)}
        />
    ))
    .add('NavBar/PopupMenu', () => (
        <PopupMenu/>
    ));

storiesOf('Layout/Drawer', module)
    .addParameters({
        info: {
            text: 'Left Drawer Component',
            propTables: [DrawerPanel],
            propTablesExclude: [SDrawerPanel], // do not display propTable for HOC
        },
    })
    .add('Drawer', () => (
        <SDrawerPanel
            show = {boolean('show', true)}
            handleDrawerToggle = {linkTo('Layout/NavBar', 'NavBar_Close')}
        />
    ));
