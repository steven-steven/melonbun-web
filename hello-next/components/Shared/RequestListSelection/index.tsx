import RequestCard from './RequestCard';

import Grid from '@material-ui/core/Grid';
import {IRequestInfo} from '../../../redux/dataTypes/request'
import {IInjectedSelectableProps} from '../Selectable/selectableContainerHOC'

import SelectableContainerHOC from '../Selectable/selectableContainerHOC';

interface IProps extends IInjectedSelectableProps {
    /** array of IRequestInfo objects representing each request items */
    requestBuffer: IRequestInfo[]
    /** string of request Id in favorites */
    favoriteRequests: string[];
    /** callback called when user adds a favorite request */
    onAddFavoriteRequest: (requestId:string) => void;
    /** callback called when user removes a favorite request */
    onRemoveFavoriteRequest: (requestId:string) => void;
}
export const RequestList = (props: IProps) => {
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
                                request={request}
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

export default SelectableContainerHOC(RequestList);
