import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import SPopupDialog, {PopupDialog} from '../components/Shared/Dialogs/PopupDialog';
import * as FormRenderHelper from '../components/Shared/Forms/FormRenderHelper';
import {FormType} from '../components/Shared/Forms/FormRenderHelper';

storiesOf('Dialog', module)
    .add('PopupDialog', () => (
            <PopupDialog 
                onSubmit={action('Submit Form!')}
                formType={FormType.REQUEST}
            />
        ),
        { info: {
            text: 'Popup that renders a specific form',
            propTables: [PopupDialog],
            propTablesExclude: [SPopupDialog], // do not display propTable for HOC
        }}
    )
    .add('Request Form', () => {
        return (FormRenderHelper.RenderForm("REQUEST", {onFormSubmit: action('Submit Form!')}));
    },
    { info: {
        text: 'Form Helper render prop function. Returns specific form based on the type specified.'
    }}
);