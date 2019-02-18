import Layout from '../components/App/Layout/index.js'
import Link from 'next/link'
import {connect} from 'react-redux';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const index = (props) => {
  console.log(props)
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {props.itemsBuffer.map(item =>{
          console.log(item);
          return ( <PostLink key={item.id} id={item.id} title={item.title}/> );
        })}
      </ul>
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