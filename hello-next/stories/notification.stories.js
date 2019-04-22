import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import Toasts from '../components/Shared/Toasts';
import SCircularIndeterminate, {CircularIndeterminate} from '../components/Shared/ProgressIndicator/circularIndeterminate';

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
    )
    .add('Circular - Indeterminate', () => (
            <CircularIndeterminate show={true}/>
        ),
        { info: {
            text: 'Circular indication when the page is loading. Indeterminate progress',
            propTables: [CircularIndeterminate],
            propTablesExclude: [SCircularIndeterminate], // do not display propTable for HOC
        }}
    );
