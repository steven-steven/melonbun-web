import RequestListSelection from '../../Shared/RequestListSelection/index';

import Typography from '@material-ui/core/Typography';
import {IRequestInfo} from '../../../redux/dataTypes/request'

interface IProps {
    requestBuffer: IRequestInfo[]
    favoriteRequests: string[];
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
}
const RequestBody = (props: IProps) => {
    const {...other} = props;
    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>All Requests</Typography>
            <RequestListSelection
                detailsHref={'/post?title='} 
                onItemDelete={()=>{}} 
                onItemCreate={()=>{}} 
                {...other}
            />
        </>
            
    )
}

export default RequestBody
