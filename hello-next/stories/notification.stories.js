import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import Toasts from '../components/Shared/Toasts';

storiesOf('Notifications', module)
    .add('Toasts', () => (
            <Toasts 
                open = {true}
                message = "Sample Notification Message"
                duration = {4000}
                onRequestClose={action('Close Toast')}
            />
        ),
        { info: {
            text: 'Simple Message Toast that displays message and close action',
            propTables: [Toasts],
        }}
    );