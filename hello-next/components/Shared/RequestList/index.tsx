import RequestCard from './RequestCard';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {IRequestInfo} from '../../../redux/dataTypes/request'

interface IProps {
    requestBuffer: IRequestInfo[]
    favoriteRequests: string[];
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
}
const RequestList = (props: IProps) => {
    const {requestBuffer, onAddFavoriteRequest, onRemoveFavoriteRequest, favoriteRequests} = props;
    return (
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
                                isFavorite={favoriteRequests.includes(request.id)}

                                onAddFavoriteRequest= {onAddFavoriteRequest}
                                onRemoveFavoriteRequest= {onRemoveFavoriteRequest}
                            />
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    )
}

export default RequestList
