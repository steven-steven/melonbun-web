import React from 'react';
import ItemListSelection from '../../Shared/ItemListSelection';
import Typography from '@material-ui/core/Typography';
import {IItemInfo} from '../../../redux/dataTypes/item';
import {FormType} from '../../Shared/Forms/FormRenderHelper';

interface IProps {
    /** array of IItemInfo objects representing each item infos */
    itemsBuffer: IItemInfo[];
    /** callback called when user delete an item */
    onItemDelete: (id:any) => void;
    /** callback called when user creates a new item */
    onItemCreate: (newItem:any) => void;
}

const HomeBody = (props: IProps) => {
    const {onItemDelete, itemsBuffer, onItemCreate} = props;
    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>The Homepage</Typography>
            <ItemListSelection 
                detailsHref={'/post?title='}
                formType={FormType.ITEM} 
                itemsBuffer={itemsBuffer}
                onItemDelete={onItemDelete} 
                onItemCreate={onItemCreate}
            />
        </>
    )
}

export default HomeBody
