import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import Grid from '@material-ui/core/Grid';
import SSideToolbar, {SideToolbar} from '../components/Shared/SideToolbar';

storiesOf('SideToolBar', module)
    .addParameters({
        info: {
            text: 'SideToolbar used by SelectableContainerHOC. This toolbar updates whenever a selectablecard is selected.',
            propTables: [SideToolbar],
            propTablesExclude: [SSideToolbar], // do not display propTable for HOC
        },
    })
    .add('SideToolbar', () => (
        <Grid container direction="row" justify="flex-end"spacing={16}>
            <Grid item xs={12} md={2}>
                <SSideToolbar  
                    detailsHref={'/post?title='}
                    selectedItemId={boolean('is item being selected', true)?'id':null}
                    onItemDelete={action('Item_Delete')} 
                    onItemCreate={action('Item_Create')}
                />
            </Grid>
            <Grid item xs={12} md={10}>

            </Grid>
        </Grid>
    ));
