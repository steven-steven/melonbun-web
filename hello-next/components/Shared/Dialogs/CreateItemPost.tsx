import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const cardStyle = (theme:any)=> ({
    
});

interface IProps {
    /** callback to create new Item. Pass form information */
    onItemCreate: (newForm:any) => void;
}

interface IState {
    /** indicate if popup dialog is open */
    isDialogOpen: boolean;
    newItemPost: {
        title: string;
        description: string;
    }
}

export class CreateItemPost extends Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            isDialogOpen: false,
            newItemPost: {
                title: '',
                description: ''
            }
        };
    }

    handleDialogToggle = ()=>{
        this.setState((prevState:IState)=> {
            return {isDialogOpen : !prevState.isDialogOpen};
        })
    }

    handleFormSubmit = ()=>{
        //Todo: validate
        const {newItemPost} = this.state;
        const {onItemCreate} = this.props;
        
        onItemCreate(newItemPost);

        this.setState({
            isDialogOpen: false,
            newItemPost: {
                title: '',
                description: ''
            }
        })
    }

    handleFormInputChange = name => ({target:{value}}) => {
        this.setState({
            newItemPost:{
                ...this.state.newItemPost,
                [name]: value,
            }
        })
    }

    renderForm = ()=>{
        const {newItemPost: {title, description}} = this.state;
        
        return(
            <form>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    value={title}
                    onChange={this.handleFormInputChange('title')}
                    fullWidth
                />
                <br/>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Description"
                    value={description}
                    onChange={this.handleFormInputChange('description')}
                    fullWidth
                    multiline
                    rows="4"
                />
            </form>
        )
    }
    renderDialog = ()=>{
        const {isDialogOpen} = this.state;
        
        return(
            <Dialog
                open={isDialogOpen}
                onClose={this.handleDialogToggle}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Post a New Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Content
                    </DialogContentText>
                    {this.renderForm()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleFormSubmit} color="primary">
                        Create Item
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    render(){
        return (
            <>
                <ListItem button onClick={this.handleDialogToggle}>
                    <ListItemText primary="Create New Item" />
                </ListItem>
                {this.renderDialog()}
            </>
        );
    }
}

export default withStyles(cardStyle)(CreateItemPost);