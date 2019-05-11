import ItemCard from './ItemCard';
import Grid from '@material-ui/core/Grid';
import {IItemInfo} from '../../../redux/dataTypes/item'
import SelectableContainerHOC from '../Selectable/selectableContainerHOC';

interface IProps {
    /** array of IItemInfo objects representing each item infos */
    itemsBuffer: IItemInfo[];
    /** Callback that passes the SelectableCard ref back to selectableContainerHOC */
    onItemSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
    /** Id of currently selected card */
    selectedItemId: string;
}

export const ItemList = (props: IProps) => {
    const {itemsBuffer, onItemSelect, selectedItemId} = props;
    return (
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
    )
}

export default SelectableContainerHOC(ItemList);
