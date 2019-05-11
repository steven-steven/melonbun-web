import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import SSelectableCard, {SelectableCard} from '../components/Shared/Selectable/selectableCard';
import selectableContainerHOC from '../components/Shared/Selectable/selectableContainerHOC';

storiesOf('Selectable', module)
    .add('selectableContainerHOC', () => {
            const innerComponent = ({onItemSelect, selectedItemId}) => {
                return(
                    <p>
                        This component will have access to IInjectedSelectableProps (select-related props)
                    </p>
                )
            }
            const selectionComponent = selectableContainerHOC(<innerComponent/>)
            return (
                <selectionComponent 
                    detailsHref={'/post?title='} 
                    onItemDelete={action('Item_Delete')} 
                    onItemCreate={action('Item_Create')}
                />
            )
        },
        { info: {
            text: 'HOC. Component being wrapped will be injected select-related props like onItemSelect and selectedItemId. The component will provide props like onItemCreate, onItemDelete, detailsHref for toolbar functionalities',
            propTables: [selectableContainerHOC],
        }}
    )
    .add('SelectableCard', () => {
            return (
                <SSelectableCard 
                    onCardSelect={action('Card_selected. Pass over the ref of this card')}
                    id={'1'}
                    active={false}
                >
                    <div style={{padding:20}}> children </div>
                </SSelectableCard>
            )
        },
        { info: {
            text: 'CardActionArea that wraps the children to make it selectable. Adjust UI when its active prop change. When clicked it calls onItemSelect which is used in SelectableContainerHOC passing the ref to update the current selected item.',
            propTables: [SelectableCard],
            propTablesExclude: [SSelectableCard]
        }}
    );