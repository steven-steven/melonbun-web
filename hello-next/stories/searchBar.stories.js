import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import SSearchBar, {SearchBar} from '../components/Shared/SearchBar';

storiesOf('SearchBar', module)
    .addParameters({
        info: {
            text: 'SearchBar shown in the main AppBar',
            propTables: [SearchBar],
            propTablesExclude: [SSearchBar], // do not display propTable for HOC
        },
    })
    .add('SearchBar', () => {
        return ( <SSearchBar/> )
    });