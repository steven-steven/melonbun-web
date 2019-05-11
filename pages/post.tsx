// pages/post.tsx
import PostBody from '../components/App/PostBody'
import Layout from '../components/App/Layout'
import {withRouter} from 'next/router'

const Post = ({router}) => (
  <Layout>
    <PostBody title={router.query.title}/>
  </Layout>
)

export default withRouter(Post);