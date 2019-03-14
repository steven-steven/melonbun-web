import RequestList from '../../Shared/RequestList/index';

import Typography from '@material-ui/core/Typography';
import {IRequestInfo} from '../../../redux/dataTypes/request'

interface IProps {
    requestBuffer: IRequestInfo[]
    favoriteRequests: string[];
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
}
const FavoriesBody = (props: IProps) => {
    const {requestBuffer, ...other} = props;
    const favoriteRequestBuffer = requestBuffer.filter(favoriteRequestId=>{
        return other.favoriteRequests.includes(favoriteRequestId.id)
    });

    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>My Favorites</Typography>
            <RequestList requestBuffer={favoriteRequestBuffer} {...other}/>
        </>
            
    )
}

export default FavoriesBody