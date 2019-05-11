import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import Paper from '@material-ui/core/Paper';

import SPopupDialog, {PopupDialog} from '../components/Shared/Dialogs/PopupDialog';
import * as FormRenderHelper from '../components/Shared/Forms/FormRenderHelper';
import {FormType} from '../components/Shared/Forms/FormRenderHelper';

storiesOf('Dialog', module)
    .add('PopupDialog', () => {

            //select knobs
            const label = 'Form Type';
            const options = FormType;
            const defaultValue = FormType.REQUEST;
            const groupId = 'FORM_GROUP';
            const formTypeVal = select(label, options, defaultValue, groupId);

            return (
                <Paper>
                    <PopupDialog 
                        onSubmit={action('Submit Form!')}
                        formType={formTypeVal}
                    />
                </Paper>
            )
        },
        { info: {
            text: 'Popup that renders a specific form',
            propTables: [PopupDialog],
            propTablesExclude: [SPopupDialog], // do not display propTable for HOC
        }}
    )
    .add('Request Form', () => {
        
        //select knobs
        const label = 'Form Type';
        const options = FormType;
        const defaultValue = FormType.REQUEST;
        const groupId = 'FORM_GROUP';
        const formTypeVal = select(label, options, defaultValue, groupId);

        return (<Paper> {FormRenderHelper.RenderForm(formTypeVal, {onFormSubmit: action('Submit Form!')})} </Paper>);
    },
    { info: {
        text: 'Form Helper render prop function. Returns specific form based on the type specified.'
    }}
);