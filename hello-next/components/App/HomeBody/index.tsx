import ItemList from '../../Shared/ItemList/index';

import Typography from '@material-ui/core/Typography';
import {IItemInfo} from '../../../redux/dataTypes/item'

interface IProps {
    itemsBuffer: IItemInfo[];
    onItemDelete: (id:any) => void;
}
const HomeBody = (props: IProps) => {
    const {...other} = props;
    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>The Homepage</Typography>
            <ItemList {...other}/>
        </>
    )
}

export default HomeBody
