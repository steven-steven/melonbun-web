import ItemCard from '../../Shared/ItemCard/Card';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

interface IProps {
    itemsBuffer: Array<any>
    onItemDelete: (id:any) => void;
}
const HomeBody = (props: IProps) => {
    const {itemsBuffer, onItemDelete} = props;
    return (
        <>
            <h1>The Homepage</h1>
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
