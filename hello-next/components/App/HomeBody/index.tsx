import ItemCard from '../../Shared/ItemCard/Card';

import Paper from '@material-ui/core/Paper';

interface IProps {
    itemsBuffer: Array<any>
}
const HomeBody = (props: IProps) => {
    const {itemsBuffer} = props;
    return (
        <>
            <h1>My Blog</h1>
            <Paper>
                {itemsBuffer.map(item =>{
                    return ( <ItemCard key={item.id} id={item.id} title={item.title}/> );
                })}
            </Paper>
        </>
    )
}

export default HomeBody
