interface IProps {
    title:string
}

const PostBody = ({title}: IProps) => (
    <div>
        <h1>{title}</h1>
        <p>This is the blog post content.</p>
    </div>
)

export default PostBody