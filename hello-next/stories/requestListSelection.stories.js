import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import RequestListSelection from '../components/Shared/RequestListSelection/index';
import SRequestCard, {RequestCard} from '../components/Shared/RequestListSelection/RequestCard.tsx';

const requestBuffer=[
    {id:'1', date:'24 November 2019', title:'Orange', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Foo', fulfilled:true},
    {id:'2', date:'24 November 2019', title:'Papaya', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Foo', fulfilled:true},
    {id:'3', date:'24 November 2019', title:'Durian', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Foo', fulfilled:true},
    {id:'4', date:'24 November 2019', title:'Mango', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Bar', fulfilled:true},
    {id:'5', date:'24 November 2019', title:'Apple', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Bar', fulfilled:true},
    {id:'6', date:'24 November 2019', title:'Pear', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Bar', fulfilled:true},
    {id:'7', date:'24 November 2019', title:'Melon', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Foo', fulfilled:true},
    {id:'8', date:'24 November 2019', title:'Lemon', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Bar', fulfilled:true},
    {id:'9', date:'24 November 2019', title:'Grape', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Foo', fulfilled:true},
    {id:'10', date:'24 November 2019', title:'Watermelon', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur project is', requesterUser:'Foo', fulfilled:true},
    {id:'11', date:'24 November 2019', title:'Guava', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Foo', fulfilled:true},
    {id:'12', date:'24 November 2019', title:'Pomegrate', description:'This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur is', requesterUser:'Foo', fulfilled:true}
]

storiesOf('RequestListSelection', module)
    .add('RequestListSelection', () => (
            <RequestListSelection 
                detailsHref={'/post?title='} 
                requestBuffer={requestBuffer} 
                onItemDelete={action('Item_Delete')} 
                onItemCreate={action('Item_Create')}
                favoriteRequests={['1','3','5']}
                onAddFavoriteRequest={action('Add_to_favorite')}
                onRemoveFavoriteRequest={action('Remove_from_favorite')}
            />
        ),
        { info: {
            text: "\
                Selection List of Request Cards. This component is a Grid list of cards that are wrapped with SelectableHOC to enhance selectable features on each card.\
                See Selectable component for option\
                ",
            propTables: [RequestListSelection],
        }}
    )
    .add('RequestCard', () => (
            <SRequestCard
                active={false}
                onItemSelect={action('Item_Selected')}
                date={'24 November 2019'}
                requesterUser={"User1"}
                fulfilled={true}
                id={"id"} 
                title={"title"} 
                description={"description"}
                isFavorite={true}
                onAddFavoriteRequest= {action('Add_to_favorite')}
                onRemoveFavoriteRequest= {action('Remove_from_favorite')}
            />
        ),
        { info: {
            text: 'RequestCard that display request info',
            propTables: [RequestCard],
            propTablesExclude: [SRequestCard],
        }}
    );
