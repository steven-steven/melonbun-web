import RequestCard from '../../Shared/RequestCard/index';

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
                {requestBuffer.map(request =>{
                    return ( 
                        <Grid key={request.id} item xs={12}>
                            <Paper>
                                <RequestCard 
                                    date={request.date}
                                    requesterUser={request.requesterUser}
                                    fulfilled={request.fulfilled}
                                    id={request.id} 
                                    title={request.title} 
                                    description={request.description}
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