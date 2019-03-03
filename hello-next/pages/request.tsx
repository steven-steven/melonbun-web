// pages/request.js
import {SFC} from 'react'
import Layout from '../components/App/Layout/index'
import TabLayout, {ITabContent} from '../components/Shared/tabLayout/index'
import RequestBody from '../components/App/RequestBody/index'
import FavoritesBody from '../components/App/FavoritesBody/index'
import {connect} from 'react-redux';
import {IRequestInfo} from '../redux/dataTypes/request'


interface IProps {
    requestBuffer:IRequestInfo[]
}

const Request: SFC<IProps> = ({ requestBuffer }) => {
    const RequestPage = <RequestBody requestBuffer={requestBuffer}/>
    const FavoritesPage = <FavoritesBody/>
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
        requestBuffer: state.requestReducer.requestBuffer
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Request);
