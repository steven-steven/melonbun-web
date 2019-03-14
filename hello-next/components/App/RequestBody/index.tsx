import ItemCard from '../../Shared/ItemCard/Card';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import {IRequestInfo} from '../../../redux/dataTypes/request'

interface IProps {
    requestBuffer: IRequestInfo[]
}
const RequestBody = (props: IProps) => {
    const {requestBuffer} = props;
    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>The Requests</Typography>
            <Grid container spacing={24}>
                {requestBuffer.map(item =>{
                    return ( 
                        <Grid key={item.id} item xs={12}>
                            <Paper>
                                <ItemCard 
                                    onItemDelete={()=>{}} 
                                    id={item.id} 
                                    title={item.title} 
                                    description={item.description}
                                />
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </>
            
    )
}

export default RequestBody
