import Layout from '../components/App/Layout/index'
import HomeBody from '../components/App/HomeBody/index'
import {connect} from 'react-redux';

const index = (props) => {
  const {itemsBuffer} = props;
  return (
    <Layout>
      <HomeBody itemsBuffer={itemsBuffer}/>
    </Layout>
  )
}

const mapStateToProps = (state)=>{
  return {
    itemsBuffer: state.itemsBuffer
  }
}
const mapDispatchToProps = {
  
}
export default connect(mapStateToProps, mapDispatchToProps)(index);