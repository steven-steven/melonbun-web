import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import SCreateItemPost, {CreateItemPost} from '../components/Shared/Dialogs/PopupDialog';

storiesOf('Dialogs', module)
    .add('CreateItemPost', () => (
            <CreateItemPost onItemCreate={action('onItemCreate!')}/>
        ),
        { info: {
            text: 'Button + Popup dialog prompting users to create new items',
            propTables: [CreateItemPost],
            propTablesExclude: [SCreateItemPost], // do not display propTable for HOC
        }}
    );
