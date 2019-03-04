// pages/request.js
import {SFC} from 'react'
import Layout from '../components/App/Layout/index'
import TabLayout, {ITabContent} from '../components/Shared/tabLayout/index'
import RequestBody from '../components/App/RequestBody/index'
import FavoritesBody from '../components/App/FavoritesBody/index'
import {connect} from 'react-redux';
import {IRequestInfo} from '../redux/dataTypes/request'
import {onAddFavoriteRequest, onRemoveFavoriteRequest} from '../redux/actionCreators/profileActions';

interface IProps {
    requestBuffer:IRequestInfo[];
    favoriteRequests: string[];
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
}

const Request = (props:IProps) => {
    const { requestBuffer, favoriteRequests, onAddFavoriteRequest, onRemoveFavoriteRequest } = props;

    const RequestPage = <RequestBody 
        requestBuffer={requestBuffer} 
        favoriteRequests={favoriteRequests}
        onAddFavoriteRequest={onAddFavoriteRequest}
        onRemoveFavoriteRequest={onRemoveFavoriteRequest}
    />
    const FavoritesPage = <FavoritesBody
        requestBuffer={requestBuffer} 
        favoriteRequests={favoriteRequests}
        onAddFavoriteRequest={onAddFavoriteRequest}
        onRemoveFavoriteRequest={onRemoveFavoriteRequest}
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

const mapStateToProps = (state)=>{
    return {
        requestBuffer: state.requestReducer.requestBuffer,
        favoriteRequests: state.profileReducer.favoriteRequests
    }
}
const mapDispatchToProps = {
    onAddFavoriteRequest,
    onRemoveFavoriteRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Request);
