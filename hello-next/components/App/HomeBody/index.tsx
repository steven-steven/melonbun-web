import PostLink from './PostLink';

interface IProps {
    itemsBuffer: Array<any>
}
const HomeBody = (props: IProps) => {
    const {itemsBuffer} = props;
    return (
        <>
            <h1>My Blog</h1>
            <ul>
                {itemsBuffer.map(item =>{
                    return ( <PostLink key={item.id} id={item.id} title={item.title}/> );
                })}
            </ul>
        </>
    )
}

export default HomeBody
