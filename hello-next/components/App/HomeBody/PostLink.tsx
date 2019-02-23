import Link from 'next/link'

interface IProps {
    key: Number,
    id: Number,
    title: String
}

const PostLink = (props: IProps) => {
    const {key, id, title} = props;
    return(
        <li>
            <Link as={`/p/${id}`} href={`/post?title=${title}`}>
            <a>{title}</a>
            </Link>
        </li>
    )
}

export default PostLink