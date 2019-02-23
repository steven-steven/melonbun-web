import {withRouter} from 'next/router'

interface IProps {
    router: any
}

const PostBody = withRouter((props: IProps) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
))

export default PostBody