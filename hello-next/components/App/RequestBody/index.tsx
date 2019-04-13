import RequestListSelection from '../../Shared/RequestListSelection/index';

import Typography from '@material-ui/core/Typography';
import {IRequestInfo} from '../../../redux/dataTypes/request'

interface IProps {
    /** array of IRequestInfo objects representing each request items */
    requestBuffer: IRequestInfo[]
    /** string of request Id in favorites */
    favoriteRequests: string[];
    /** callback called when user adds a favorite request */
    onAddFavoriteRequest: (requestId:string) => void;
    /** callback called when user removes a favorite request */
    onRemoveFavoriteRequest: (requestId:string) => void;
    /** callback called when user delete a request */
    onItemDelete?: (id:any) => void;
    /** callback called when user creates a request */
    onItemCreate: (newItem:any) => void;
}
const RequestBody = (props: IProps) => {
    const {...other} = props;
    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>All Requests</Typography>
            <RequestListSelection
                detailsHref={'/post?title='} 
                onItemDelete={()=>{}} 
                {...other}
            />
        </>
            
    )
}

export default RequestBody;
