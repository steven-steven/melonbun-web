import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import ItemListSelection from '../components/Shared/ItemListSelection/index.tsx';
import SItemCard, {ItemCard} from '../components/Shared/ItemListSelection/ItemCard.tsx';

const sampleItemBuffer=[
    {id:'1', date:'24 November 2019', title:'Orange', description:'This project is'},
    {id:'2', date:'24 November 2019', title:'Papaya', description:'This project is'},
    {id:'3', date:'24 November 2019', title:'Durian', description:'This project is'},
    {id:'4', date:'24 November 2019', title:'Mango', description:'This project is'},
    {id:'5', date:'24 November 2019', title:'Apple', description:'This project is'},
    {id:'6', date:'24 November 2019', title:'Pear', description:'This project is'},
    {id:'7', date:'24 November 2019', title:'Melon', description:'This project is'},
    {id:'8', date:'24 November 2019', title:'Lemon', description:'This project is'},
    {id:'9', date:'24 November 2019', title:'Grape', description:'This project is'},
    {id:'10', date:'24 November 2019', title:'Watermelon', description:'This project is'},
    {id:'11', date:'24 November 2019', title:'Guava', description:'This project is'},
    {id:'12', date:'24 November 2019', title:'Pomegrate', description:'This project is'}
]

storiesOf('ItemListSelection', module)
    .add('ItemListSelection', () => (
            <ItemListSelection 
                detailsHref={'/post?title='} 
                itemsBuffer={sampleItemBuffer} 
                onItemDelete={action('Item_Delete')} 
                onItemCreate={action('Item_Create')}
            />
        ),
        { info: {
            text: "\
                Selection List of ItemsCards. This component is a Grid list of cards that are wrapped with SelectableHOC to enhance selectable features on each card.\
                See Selectable component for option\
                ",
            propTables: [ItemListSelection],
        }}
    )
    .add('ItemCard', () => (
            <SItemCard
                active={false}
                onItemSelect={action('Item_Selected')}
                id={1} 
                title={"Title"} 
                description={"Description"}
            />
        ),
        { info: {
            text: "ItemsCard that display items info",
            propTables: [ItemCard],
            propTablesExclude: [SItemCard],
        }}
    );
