import RequestList from '../../Shared/RequestList/index';

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
            <RequestList {...other}/>
        </>
            
    )
}

export default RequestBody
