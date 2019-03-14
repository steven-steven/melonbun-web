import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

import Paper from '@material-ui/core/Paper';
import CreateItemPost from '../Dialogs/CreateItemPost';

interface IProps {
    selectedItemId?: string;
    onItemDelete?: (id:any) => void;
    onItemCreate: (newItem:any) => void;
}
const SideToolbar = (props: IProps) => {
    const {onItemDelete, selectedItemId, onItemCreate} = props;

    if (selectedItemId){
        return (
            <Paper>
                {
                    onItemDelete && 
                    (<IconButton onClick={()=> onItemDelete(selectedItemId)}>
                        <Delete/>
                    </IconButton>)
                }
            </Paper>
        )
    }

    return (
        <Paper>
            <CreateItemPost onItemCreate={onItemCreate}/>
        </Paper>
    )
}

export default SideToolbar
