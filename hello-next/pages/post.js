import {withRouter} from 'next/router'
import Layout from '../components/App/Layout/index.js'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const post = (props) => (
  <Layout>
    <Content />
  </Layout>
)

export default post;