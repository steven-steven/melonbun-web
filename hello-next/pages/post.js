
import PostBody from '../components/App/PostBody/index'
import Layout from '../components/App/Layout/index'
import {withRouter} from 'next/router'


// interface IProps {
//   router: {
//     query: {
//       title: string;
//     }
//   }
//}

const Post = ({router}) => (
  <Layout>
    <PostBody title={router.query.title}/>
  </Layout>
)

export default withRouter(Post);