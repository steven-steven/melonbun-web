import ItemCard from './ItemCard';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {IItemInfo} from '../../../redux/dataTypes/item'
import SelectableContainerHOC from '../../Shared/Selectable/selectableContainerHOC';

interface IProps {
    itemsBuffer: IItemInfo[];
    onItemSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
    selectedItemId: string;
}

const ItemList = (props: IProps) => {
    const {itemsBuffer, onItemSelect, selectedItemId} = props;
    return (
        <Paper>
            <Grid container direction="row" justify="flex-start" spacing={16} alignItems="flex-start">

                {itemsBuffer.map(item =>{
                    const selected = selectedItemId ? (item.id == selectedItemId) : false;
                    return ( 
                        <Grid key={item.id} item md={4} xs={6}>
                            <ItemCard 
                                active={selected}
                                onItemSelect={onItemSelect}
                                id={item.id} 
                                title={item.title} 
                                description={item.description}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    )
}

export default SelectableContainerHOC(ItemList)
