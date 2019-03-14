import React from 'react';
import ItemListSelection from '../../Shared/ItemListSelection/index';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {IItemInfo} from '../../../redux/dataTypes/item';
import SideToolbar from '../../Shared/SideToolbar/index';

import Paper from '@material-ui/core/Paper';

interface IProps {
    itemsBuffer: IItemInfo[];
    onItemDelete: (id:any) => void;
    onItemCreate: (newItem:any) => void;
}

const HomeBody = (props: IProps) => {
    const {onItemDelete, itemsBuffer, onItemCreate} = props;
    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>The Homepage</Typography>
            <ItemListSelection itemsBuffer={itemsBuffer} onItemDelete={onItemDelete} onItemCreate={onItemCreate}/>
        </>
    )
}

export default HomeBody
