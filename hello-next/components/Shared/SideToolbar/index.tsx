import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import CreateItemPost from '../Dialogs/CreateItemPost';
import {NextLink} from '../nextLink';

const toolbarStyle = (theme:any)=> ({
    root: {
        height: 300,
    },
});

interface IProps {
    /** Id of currently selected card */
    selectedItemId?: string;
    /** base link of card's details page. ie) '/post?title=' and an id will be appended */
    detailsHref?: string;
    /** callback called when user delete an item */
    onItemDelete?: (id:any) => void;
    /** callback called when user creates a new item */
    onItemCreate: (newItem:any) => void;
    classes:{
        root: string;
    }
}

export const SideToolbar = (props: IProps) => {
    const {onItemDelete, selectedItemId, onItemCreate, classes = defaultProps.classes , detailsHref} = props;

    const itemSpecificMenus = ()=>{
        return (
            <> 
                {detailsHref && 
                (
                    //detailsHref is link to individual post in the form: `/post?title=` + 'id'
                    <ListItem button component={NextLink} href={detailsHref+selectedItemId}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Details" />
                    </ListItem>
                )}

                {onItemDelete && 
                (
                    <ListItem button onClick={()=> onItemDelete(selectedItemId)}>
                        <ListItemIcon>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Trash" />
                    </ListItem>
                )}
            </>
        )
    }

    return (
        <Paper className={classes.root}>
            
            <List component="nav">
                <CreateItemPost onItemCreate={onItemCreate}/>
                <ListItem button>
                    <ListItemText primary="Share" />
                </ListItem>
            </List>

            <Divider />

            <List component="nav">
                {selectedItemId?itemSpecificMenus():''}
            </List>
        </Paper>


    )
}

const defaultProps = {
    classes:{
        root: ''
    }
};

export default withStyles(toolbarStyle)(SideToolbar);
