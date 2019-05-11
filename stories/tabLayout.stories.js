import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import STabLayout, {TabLayout} from '../components/Shared/tabLayout';
import TabContainer from '../components/Shared/tabLayout/TabContainer';

storiesOf('TabLayout', module)
    .addParameters({
        info: {
            text: 'Tabbing Layout. Passing an array of ITabContent. TabContainer just wraps arround the content of the tab',
            propTables: [TabLayout, TabContainer],
            propTablesExclude: [STabLayout], // do not display propTable for HOC
        },
    })
    .add('TabLayout', () => {
        const tabContentList = [
            {title:'Requests', content:(<p>Content 1</p>), icon:'assignment'},
            {title:'Favorites', content:(<p>Content 2</p>), icon:'favorite'}
        ]
        
        return ( <STabLayout tabContentList={tabContentList}/> )
    })
    .add('TabLayout_isFetching', () => {
        const tabContentList = [
            {title:'Requests', content:(<p>Content 1</p>), icon:'assignment'},
            {title:'Favorites', content:(<p>Content 2</p>), icon:'favorite'}
        ]
        
        return ( <STabLayout isFetching={true} tabContentList={tabContentList}/> )
    });
