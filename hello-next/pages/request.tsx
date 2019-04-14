// pages/request.tsx
import React, {Component} from 'react';
import Layout from '../components/App/Layout'
import TabLayout, {ITabContent} from '../components/Shared/tabLayout'
import RequestBody from '../components/App/RequestBody'
import FavoritesBody from '../components/App/FavoritesBody'
import {connect} from 'react-redux';
import {IRequestInfo} from '../redux/dataTypes/request'
import {onAddFavoriteRequest, onRemoveFavoriteRequest} from '../redux/actioncreators/profileActions';
import {initializeRequestEntries, createNewRequest} from '../redux/actioncreators/RequestActions';


interface IProps {
    requestBuffer:IRequestInfo[];
    favoriteRequests: string[];
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
    initializeRequestEntries: typeof initializeRequestEntries;
    createNewRequest: typeof createNewRequest;
}

export class Request extends Component<IProps>{

    componentWillMount() {
        const {initializeRequestEntries} = this.props;
        initializeRequestEntries();
    }

    render(){
        const { requestBuffer, favoriteRequests, onAddFavoriteRequest, onRemoveFavoriteRequest, createNewRequest} = this.props;

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
                <TabLayout tabContentList={tabContentList}/>
            </Layout>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        requestBuffer: state.requestReducer.requestBuffer,
        favoriteRequests: state.profileReducer.favoriteRequests
    }
}
const mapDispatchToProps = {
    onAddFavoriteRequest,
    onRemoveFavoriteRequest,
    initializeRequestEntries,
    createNewRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Request);
