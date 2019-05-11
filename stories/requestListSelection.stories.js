import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import RequestListSelection from '../components/Shared/RequestListSelection';
import SRequestCard, { RequestCard } from '../components/Shared/RequestListSelection/RequestCard.tsx';
import {FormType} from '../components/Shared/Forms/FormRenderHelper';

const requestBuffer = [
    {
        "tags": [
            "api",
            "test"
        ],
        "name": "adipisicing",
        "description": "id pariatur qui ea laboris",
        "created_by": "Tester",
        "status": "PENDING",
        "price": {
            "value": 4,
            "currency": "CAD"
        },
        "created_at": "2019-04-04T00:43:04.588Z",
        "id": "5ca55318f8e18100860471b2"
    },
    {
        "tags": [
            "api",
            "test"
        ],
        "name": "do",
        "description": "fugiat anim sint qui ex",
        "created_by": "Tester",
        "status": "COMPLETE",
        "price": {
            "value": 6,
            "currency": "CAD"
        },
        "created_at": "2019-04-04T00:43:04.588Z",
        "id": "5ca55318f8e18100860471b4"
    },
    {
        "tags": [
            "api",
            "test"
        ],
        "name": "nulla",
        "description": "qui amet consequat occaecat ad",
        "created_by": "Tester",
        "status": "PENDING",
        "price": {
            "value": 0,
            "currency": "CAD"
        },
        "created_at": "2019-04-04T00:43:04.584Z",
        "id": "5ca55318f8e18100860471ae"
    },
    {
        "tags": [
            "api",
            "test"
        ],
        "name": "cillum",
        "description": "aliqua incididunt officia commodo dolore",
        "created_by": "Tester",
        "status": "FULFILLED",
        "price": {
            "value": 5,
            "currency": "CAD"
        },
        "created_at": "2019-04-04T00:43:04.588Z",
        "id": "5ca55318f8e18100860471b3"
    },
    {
        "tags": [
            "api",
            "test"
        ],
        "name": "elit",
        "description": "ipsum cillum adipisicing Lorem officia",
        "created_by": "Tester",
        "status": "INCOMPLETE",
        "price": {
            "value": 3,
            "currency": "CAD"
        },
        "created_at": "2019-04-04T00:43:04.587Z",
        "id": "5ca55318f8e18100860471b1"
    }
]

storiesOf('RequestListSelection', module)
    .add('RequestListSelection', () => (
        <RequestListSelection
            detailsHref={'/post?title='}
            requestBuffer={requestBuffer}
            formType={FormType.REQUEST}
            onItemDelete={action('Item_Delete')}
            onItemCreate={action('Item_Create')}
            favoriteRequests={['1', '3', '5']}
            onAddFavoriteRequest={action('Add_to_favorite')}
            onRemoveFavoriteRequest={action('Remove_from_favorite')}
        />
    ),
        {
            info: {
                text: "\
                Selection List of Request Cards. This component is a Grid list of cards that are wrapped with SelectableHOC to enhance selectable features on each card.\
                See Selectable component for option\
                ",
                propTables: [RequestListSelection],
            }
        }
    )
    .add('RequestCard', () => (
        <SRequestCard
            active={false}
            onItemSelect={action('Item_Selected')}
            request={requestBuffer[0]}
            isFavorite={true}
            onAddFavoriteRequest={action('Add_to_favorite')}
            onRemoveFavoriteRequest={action('Remove_from_favorite')}
        />
    ),
        {
            info: {
                text: 'RequestCard that display request info',
                propTables: [RequestCard],
                propTablesExclude: [SRequestCard],
            }
        }
    );
