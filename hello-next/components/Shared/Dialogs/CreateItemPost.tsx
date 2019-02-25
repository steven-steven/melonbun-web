import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';


const cardStyle = (theme:any)=> ({
    
});

interface IProps {
    onItemCreate: (newForm:any) => void;
}

interface IState {
    isDialogOpen: boolean;
    newItemPost: {
        title: string;
        description: string;
    }
}

class CreateItemPost extends React.Component<IProps, IState>{
    
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
                <Button variant="outlined" color="inherit" mini onClick={this.handleDialogToggle}>
                    Create New Item
                </Button>
                {this.renderDialog()}
            </>
        );
    }
}

export default withStyles(cardStyle)(CreateItemPost)