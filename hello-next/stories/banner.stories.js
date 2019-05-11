import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { text } from '@storybook/addon-knobs';

import SPageBanner, {PageBanner} from '../components/Shared/Banner';

storiesOf('Banner', module)
    .addParameters({
        info: {
            text: 'Banner shown in the index page. Welcomes user to the site',
            propTables: [PageBanner],
            propTablesExclude: [SPageBanner], // do not display propTable for HOC
        },
    })
    .add('Page Banner', () => {
        const title = text('Title', 'MelonBun');
        const description = text('Description', 'Reliably request your favorite merchandise from fullfillers across the globe. Or be a fullfiller today to help people purchase items from places near you.');
        return (
            <SPageBanner
                title={title}
                description={description}
            />
        )
    });