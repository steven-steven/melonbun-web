import RequestCard from './RequestCard';

import Grid from '@material-ui/core/Grid';
import {IRequestInfo} from '../../../redux/dataTypes/request'
import {IInjectedSelectableProps} from '../Selectable/selectableContainerHOC'

import SelectableContainerHOC from '../../Shared/Selectable/selectableContainerHOC';

interface IProps extends IInjectedSelectableProps {
    requestBuffer: IRequestInfo[]
    favoriteRequests: string[];
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
}
const RequestList = (props: IProps) => {
    const {requestBuffer, onAddFavoriteRequest, onRemoveFavoriteRequest, favoriteRequests, onItemSelect, selectedItemId} = props;
    return (
        <Grid container spacing={24}>
            {requestBuffer.map(request =>{
                const selected = selectedItemId ? (request.id == selectedItemId) : false;
                return ( 
                    <Grid key={request.id} item xs={12}>
                            <RequestCard
                                active={selected}
                                onItemSelect={onItemSelect}
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
                    </Grid>
                );
            })}
        </Grid>
    )
}

export default SelectableContainerHOC(RequestList)
