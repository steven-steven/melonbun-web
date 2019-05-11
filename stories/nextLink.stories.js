import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { text } from '@storybook/addon-knobs';

import {NextLink} from '../components/Shared/nextLink';
import MuiLink from '@material-ui/core/Link';

storiesOf('NextLink', module)
    .addParameters({
        info: {
            text: '<a> tag wrapped with link of Next.js. Normally it is used to be passed to component prop of MUI component like Button/ListItem/MuiLink It gives the element client-side rendering feature of Next.js',
            propTables: [NextLink],
        },
    })
    .add('NextLink', () => (
        <NextLink href={`${text('Link Href', '#')}`} className="myClass" hrefAs="#">{text('Link text', 'Children')}</NextLink>
    ))
    .add('MuiLink wrapped in NextLink', () => (
        <MuiLink component={NextLink} href={'/'} variant="h6" color="inherit" underline="none">
            MelonBun
        </MuiLink>
    ));
