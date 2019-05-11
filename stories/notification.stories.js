import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { boolean, text, number } from '@storybook/addon-knobs';

import Toasts from '../components/Shared/Toasts';
import SCircularIndeterminate, {CircularIndeterminate} from '../components/Shared/ProgressIndicator/circularIndeterminate';

storiesOf('Notifications', module)
    .add('Toasts', () => (
            <Toasts 
                open = {boolean('Open', true)}
                message = {text('Message', 'Sample Notification Message')}
                duration = {number('duration', 4000)}
                onRequestClose={action('Close Toast')}
            />
        ),
        { info: {
            text: 'Simple Message Toast that displays message and close action',
            propTables: [Toasts],
        }}
    )
    .add('Circular - Indeterminate', () => (
            <CircularIndeterminate show={boolean('Show', true)}/>
        ),
        { info: {
            text: 'Circular indication when the page is loading. Indeterminate progress',
            propTables: [CircularIndeterminate],
            propTablesExclude: [SCircularIndeterminate], // do not display propTable for HOC
        }}
    );
