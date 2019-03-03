import ItemCard from '../../Shared/ItemCard/Card';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {IItemInfo} from '../../../redux/dataTypes/item'

interface IProps {
    itemsBuffer: IItemInfo[];
    onItemDelete: (id:any) => void;
}
const HomeBody = (props: IProps) => {
    const {itemsBuffer, onItemDelete} = props;
    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>The Homepage</Typography>
            <Grid container direction="row" justify="center">
                <Grid item>
                    <Paper>
                        <Grid container direction="row" justify="flex-start" spacing={16} alignItems="flex-start">

                            {itemsBuffer.map(item =>{
                                return ( 
                                    <Grid key={item.id} item>
                                        <Paper>
                                            <ItemCard 
                                                onItemDelete={onItemDelete} 
                                                id={item.id} 
                                                title={item.title} 
                                                description={item.description}
                                            />
                                        </Paper>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default HomeBody
