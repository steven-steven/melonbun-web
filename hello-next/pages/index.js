import Layout from '../components/App/Layout/index'
import HomeBody from '../components/App/HomeBody/index'
import {connect} from 'react-redux';
import {onItemDelete} from '../redux/actionCreators/CardActions';

const index = (props) => {
  const {itemsBuffer,onItemDelete} = props;
  return (
    <Layout>
      <HomeBody onItemDelete={onItemDelete} itemsBuffer={itemsBuffer}/>
    </Layout>
  )
}

const mapStateToProps = (state)=>{
  return {
    itemsBuffer: state.itemsBuffer
  }
}
const mapDispatchToProps = {
  onItemDelete
}
export default connect(mapStateToProps, mapDispatchToProps)(index);