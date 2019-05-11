// pages/index.tsx
import React, {Component} from 'react';
import Layout from '../components/App/Layout'
import TabLayout, {ITabContent} from '../components/Shared/tabLayout'
import Banner from '../components/Shared/Banner'
import RequestBody from '../components/App/RequestBody'
import FavoritesBody from '../components/App/FavoritesBody'
import {connect} from 'react-redux';
import {IRequestInfo} from '../redux/dataTypes/request'
import {onAddFavoriteRequest, onRemoveFavoriteRequest} from '../redux/actioncreators/profileActions';
import {initializeRequestEntries, createNewRequest} from '../redux/actioncreators/RequestActions';

interface StateProps {
    requestBuffer:IRequestInfo[];
    favoriteRequests: string[];
    isFetching: boolean;
}
    
interface DispatchProps {
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
    initializeRequestEntries: typeof initializeRequestEntries;
    createNewRequest: typeof createNewRequest;
}

type Props = StateProps & DispatchProps

export class Request extends Component<Props>{

    componentWillMount() {
        const {initializeRequestEntries} = this.props;
        initializeRequestEntries();
    }

    render(){
        const { isFetching, requestBuffer, favoriteRequests, onAddFavoriteRequest, onRemoveFavoriteRequest, createNewRequest} = this.props;

        const RequestPage = <RequestBody 
            requestBuffer={requestBuffer} 
            favoriteRequests={favoriteRequests}
            onAddFavoriteRequest={onAddFavoriteRequest}
            onRemoveFavoriteRequest={onRemoveFavoriteRequest}
            onItemCreate={createNewRequest}
        />
        const FavoritesPage = <FavoritesBody
            requestBuffer={requestBuffer} 
            favoriteRequests={favoriteRequests}
            onAddFavoriteRequest={onAddFavoriteRequest}
            onRemoveFavoriteRequest={onRemoveFavoriteRequest}
            onItemCreate={createNewRequest}
        />
        const tabContentList:ITabContent[] = [
            {title:'Requests', content:RequestPage, icon:'assignment'},
            {title:'Favorites', content:FavoritesPage, icon:'favorite'}
        ]

        return (
            <Layout hasTabLayout={true}>
              <Banner
                title={"MelonBun"}
                description={"Reliably request your favorite merchandise from fullfillers across the globe. Or be a fullfiller today to help people purchase items from places near you."}
              />
              <TabLayout isFetching={isFetching} tabContentList={tabContentList}/>
            </Layout>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        requestBuffer: state.requestReducer.requestBuffer,
        favoriteRequests: state.profileReducer.favoriteRequests,
        isFetching: state.notificationReducer.isFetching
    }
}
const mapDispatchToProps = {
    onAddFavoriteRequest,
    onRemoveFavoriteRequest,
    initializeRequestEntries,
    createNewRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Request);