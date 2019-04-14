import RequestListSelection from '../../Shared/RequestListSelection';

import Typography from '@material-ui/core/Typography';
import {IRequestInfo} from '../../../redux/dataTypes/request'
import {FormType} from '../../Shared/Forms/FormRenderHelper';

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

const FavoriesBody = (props: IProps) => {
    const {requestBuffer, ...other} = props;
    
    const favoriteRequestBuffer = requestBuffer.filter(favoriteRequestId=>{
        return other.favoriteRequests.includes(favoriteRequestId.id)
    });

    return (
        <>
            <Typography component="h3" variant="h3" gutterBottom>My Favorites</Typography>
            
            <RequestListSelection 
                detailsHref={'/post?title='}
                formType={FormType.REQUEST}
                onItemDelete={()=>{}}
                requestBuffer={favoriteRequestBuffer} 
                {...other}
            />
        </>
            
    )
}

export default FavoriesBody