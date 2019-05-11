// pages/index.tsx
import Layout from '../components/App/Layout';
import HomeBody from '../components/App/HomeBody';
import {connect} from 'react-redux';
import {onItemDelete, onItemCreate} from '../redux/actioncreators/cardActions';

const index = (props) => {
  const {itemsBuffer,onItemDelete, onItemCreate} = props;
  return (
    <Layout>
      <HomeBody onItemDelete={onItemDelete} itemsBuffer={itemsBuffer} onItemCreate={onItemCreate}/>
    </Layout>
  )
}

const mapStateToProps = (state)=>{
  return {
    itemsBuffer: state.itemReducer.itemsBuffer
  }
}
const mapDispatchToProps = {
  onItemDelete,
  onItemCreate
}
export default connect(mapStateToProps, mapDispatchToProps)(index);